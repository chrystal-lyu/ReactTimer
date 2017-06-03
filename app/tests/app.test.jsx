var expect = require('expect');

describe('App', () => {
  it('should properly run tests', () => {
    expect(1).toBe(1);
  });
});

describe('About', () => {
  it('should properly run test about', () => {
    expect(2).toBeA('number');
  });
});
