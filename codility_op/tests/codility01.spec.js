/* eslint-disable no-prototype-builtins */
/* eslint-env jest */
import solution from '../src/index';

describe('solution', () => {
  it('should share the property', () => {
    const i = 0;
    const A = [1];
    const T = solution(A);
    const expected = false;
    expect(T[i].value()).toEqual(1);
    expect(A[i].hasOwnProperty('value')).toEqual(expected);
    expect(T[i].hasOwnProperty('value')).toEqual(expected);
  });

  it('should fail on A.length > 200', () => {
    const j = 200;
    const A = [...Array(j + 1).keys()];
    const T = solution(A);
    expect(T).toEqual(undefined);
  });

  it('should fail on [undefined]', () => {
    const A = [undefined, 1];
    const T = solution(A);
    expect(T).toEqual(undefined);
  });

  it('should fail on A.length === 0', () => {
    const A = [];
    const T = solution(A);
    expect(T).toEqual(undefined);
  });

  it('should T[i].value() === A[i]', () => {
    const i = 0;
    const A = [1];
    const T = solution(A);
    expect(T[i].value()).toEqual(A[i]);
    expect(T[i].value()).toEqual(A[i]);
  });

  it('should T[i].value === T[j].value', () => {
    const i = 0;
    const j = 1;
    const A = [1, 2];
    const T = solution(A);
    expect(T[i].value).toEqual(T[j].value);
  });

  it("should !T[i].hasOwnProperty('value')", () => {
    const i = 0;
    const A = [1];
    const T = solution(A);
    expect(!T[i].hasOwnProperty('value')).toEqual(true);
  });

  it("should !T[j].hasOwnProperty('value')", () => {
    const j = 1;
    const A = [1, 2];
    const T = solution(A);
    expect(!T[j].hasOwnProperty('value')).toEqual(true);
  });

  describe('given [4, 2]', () => {
    it('should T[0].value() === 4', () => {
      const A = [4, 2];
      const T = solution(A);
      expect(T[0].value()).toEqual(4);
    });

    it('should T[1].value() === 2', () => {
      const A = [4, 2];
      const T = solution(A);
      expect(T[1].value()).toEqual(2);
    });

    it('should T[0].value === T[1].value', () => {
      const A = [4, 2];
      const T = solution(A);
      expect(T[0].value).toEqual(T[1].value);
    });

    it("should !T[0].hasOwnProperty('value')", () => {
      const A = [4, 2];
      const T = solution(A);
      expect(!T[0].hasOwnProperty('value')).toEqual(true);
    });

    it("should !T[1].hasOwnProperty('value')", () => {
      const A = [4, 2];
      const T = solution(A);
      expect(!T[1].hasOwnProperty('value')).toEqual(true);
    });
  });
});
