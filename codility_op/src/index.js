/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line no-extend-native
// Array.prototype.value = function value() {
//   return 'TEST';
// };
function Abstract() {}
Abstract.prototype.value = function value() {
  return this._value;
};

function Item(value) {
  this._value = value;
}
Object.setPrototypeOf(Item.prototype, Abstract.prototype);

function numberInAllowedRange(number) {
  return Number.isInteger(number)
    && number >= Number.MIN_SAFE_INTEGER
    && number <= Number.MAX_SAFE_INTEGER;
}

function isLengthAllowed(N) {
  return N >= 1 && N <= 200;
}

function areNumbersInAllowedRange(A) {
  return A.filter(numberInAllowedRange).length === A.length;
}

function itemBuilder() {
  return (number) => new Item(number);
}

function solution(A) {
  if (!isLengthAllowed(A.length)) {
    return undefined;
  }

  if (!areNumbersInAllowedRange(A)) {
    return undefined;
  }

  const result = A.map(itemBuilder());
  return result;
}

export default solution;
