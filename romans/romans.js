function convert(number) {
  if (number <= 0) {
    return '';
  }
  const pairs = [
    [5000, '(V)'],
    [4000, 'M(V)'],
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  const result = pairs.find(([myNumber]) => myNumber <= number);
  if (result) {
    [arabic, roman] = result;
    roman += convert(number - arabic);
  }

  return roman;
}

module.exports = convert;