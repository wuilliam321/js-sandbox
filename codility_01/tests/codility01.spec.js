/* eslint-env jest */
import solution from '../src/index';


describe('Given', () => {
  it('empty', () => {
    const result = solution(0, 0, []);
    expect(result).toEqual([]);
  });

  it('test 1', () => {
    const result = solution(3, 5, [2, 1, 3, 1, 2, 2, 3]);
    expect(result).toEqual([2, 3]);
  });

  it('test 2', () => {
    const result = solution(3, 7, [1, 1, 1, 1, 2, 2, 2, 2, 3]);
    expect(result).toEqual([2]);
  });

  it('test 3', () => {
    const result = solution(3, 5, [2, 2, 4, 2, 2, 2, 3]);
    expect(result).toEqual([2, 3]);
  });

  it('test 4', () => {
    const result = solution(3, 5, [2, 1, 3, 2, 3, 3, 3]);
    expect(result).toEqual([3]);
  });

  it('test 5', () => {
    const result = solution(4, 2, [1, 2, 2, 1, 2]);
    expect(result).toEqual([2, 3]);
  });

  it('test 6', () => {
    const result = solution(1, 1, [1]);
    expect(result).toEqual([2]);
  });

  it('test 7', () => {
    const result = solution(1, 100000, [100000]);
    expect(result).toEqual([100001]);
  });

  it('test 8', () => {
    const result = solution(1, 100000, [99999, 99999, 100000, 100000]);
    expect(result).toEqual([99999, 100000]);
  });

  it('test 9 one lead', () => {
    const result = solution(1, 4, [1]);
    expect(result).toEqual([2]);
  });

  it('test 10', () => {
    const records = 99;
    const list = [...Array(records).keys()];
    const result = solution(1, 1, list);
    expect(result).toEqual([]);
  });

  it('test 10 half', () => {
    const result = solution(4, 8, [2, 2, 4, 4]);
    expect(result).toEqual([2, 4]);
  });
});
