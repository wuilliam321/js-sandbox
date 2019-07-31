const helper = require('./pert');
const pert = helper.pert;
const round = helper.round;

describe('Given, O, N, P return the PERT estimations', () => {
  it('should return [] if o,n,p are null', () => {
    const result = pert(null, null, null);
    expect(result).toEqual([]);
  });
  
  it('should return [] if o,n,p are undefined', () => {
    const result = pert(undefined, undefined, undefined);
    expect(result).toEqual([]);
  });

  it('should return [] when o or n or p are <0', () => {
    const result = pert(-1, -1, -1);
    expect(result).toEqual([]);
  });

  it('should return [] when o or n or p are letters', () => {
    const result = pert('', '', '');
    expect(result).toEqual([]);
  });

  it('should return [] when o or n or p are Infinity', () => {
    const result = pert(Infinity, Infinity, Infinity);
    expect(result).toEqual([]);
  });
  
  it('should return the calulation 0 when o,n,p are 0', () => {
    const result = pert(0, 0, 0);
    expect(result).toEqual([0, 0]);
  });
  
  [
    [[1, 3, 12], [4.2, 1.8]],
    [['1', '3', '12'], [4.2, 1.8]]
  ].forEach(([params, expected_result]) => {
    it(`should return the calulation ${expected_result} when params are ${params}`, () => {
      const result = pert(...params);
      expect(result).toEqual(expected_result);
    });
  })

  it('should round the number to 1 decimal', () => {
    const result = round(4.21111111);
    expect(result).toEqual(4.2);
  })
})