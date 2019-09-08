function solution(K, M, A) {
  function sort(a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  }
  function getLead(list) {
    const numbers = list.reduce((acc, v) => {
      acc[v] = (acc[v] + 1) || 1;
      return acc;
    }, {});
    const twoLeads = Object.entries(numbers)
      .filter(([n, v]) => v === list.length / 2).map(([n]) => Number(n));
    const thereAreTwoLeads = twoLeads.length > 0;
    if (thereAreTwoLeads) {
      return twoLeads;
    }
    const [lead, count] = Object.entries(numbers).reduce(([a, b], [k, v]) => {
      if (b > v) {
        return [a, b];
      }
      return [Number(k), Number(v)];
    }, [0, 0]);
    const thereIsLead = lead > 0 && (count > Math.floor((list.length / 2)));
    console.log(lead, count, list.length, thereIsLead);
    return (thereIsLead) ? lead : false;
    // const counts = { lead: -1, count: -1 };
    // const numbers = {};
    // list.forEach((item) => {
    //   const count = list.filter((i) => i === item).length;
    //   numbers[item] = count;
    //   if (numbers[item] > counts.count) {
    //     counts.lead = item;
    //     counts.count = count;
    //   }
    // });

    // const values = Object.values(numbers).sort(sort);
    // const max = values[0];
    // const existsLead = !!values.find((i) => i >= max);
    // if (!existsLead) {
    //   return false;
    // }

    // return counts.lead;
  }

  function getNewSegment(list, start, end) {
    start += 1;
    const newA = list.slice(0);
    const qty = end + start;
    // console.log(`${list.length}, ${start}, ${qty}, long=${end}`);
    if (list.length >= qty) {
      for (let i = start; i < qty; i += 1) {
        newA[i] += 1;
      }
      console.log('SEG', newA);
      return newA;
    }
    return false;
  }

  // write your code in JavaScript (Node.js 8.9.4)
  if (!K
    || !M
    || !A
    || !Number.isInteger(K)
    || !Number.isInteger(M)
    || (A.length > 100000)
    || (A.length < 1)
    || (M > 100000)
    || (M < 1)
    || (K > 100000)
    || (K < 1)) {
    return [];
  }
  const outOfRangeItems = !!A.find((i) => i > 100000
    || i < 1
    || i > M);
  if (outOfRangeItems) {
    return [];
  }
  if (A.length === 1) {
    return [A[0] + 1];
  }

  let leads = [];

  let thereIsLead = true;
  let count = 0;
  let newA = A.slice(0);
  console.log('LIST', newA);
  while (thereIsLead) {
    if (newA) {
      const newLead = getLead(newA);
      if (newLead && newLead instanceof Array) {
        leads = leads.concat(newLead);
      }
      if (typeof (newLead) === 'number') {
        leads.push(newLead);
      }
      newA = getNewSegment(A.slice(0), count, K);
    } else {
      thereIsLead = false;
    }
    count += 1;
  }
  const uniqueLeads = (v, i, a) => a.indexOf(v) === i;
  return leads.filter(uniqueLeads).sort(sort);
}


export default solution;
