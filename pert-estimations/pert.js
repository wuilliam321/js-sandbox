function round(number) {
  return parseFloat(number.toFixed(1));
}

function paramsAreInvalid(params) {
  let isValid = true;
  params.forEach(param => {
    if (Number.isNaN(parseInt(param)) || param === undefined || param === null || param < 0) {
      isValid = false;
    }
  })
  return !isValid;
}

function pert(optimistic, normal, pesimistic) {
  let result;
  if (paramsAreInvalid([optimistic, normal, pesimistic])) {
    result = [];
  } else {
    const o = parseInt(optimistic);
    const n = parseInt(normal);
    const p = parseInt(pesimistic);
    const estimation = (o + (4 * n) + p) / 6;
    const deviation = (p - o) / 6;
    result = [round(estimation), round(deviation)]
  }
  return result;
}

module.exports = {
  pert,
  round
};