const convert = require('./romans');
const CONVERSIONS = [
  [5000, '(V)'],
  [4000, 'M(V)'],
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [20, 'XX'],
  [10, 'X'],
  [9, 'IX'],
  [6, 'VI'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
  [3424, 'MMMCDXXIV'],
]
describe('Convert Algebraic to Romans', () => {
  CONVERSIONS.map(([number, roman]) => {
    it(`should convert ${number} to ${roman}`, () => {
      let result = convert(number)
      expect(result).toEqual(roman);
    });
  })
})