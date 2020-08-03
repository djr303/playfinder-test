import { GBPToEUR, getDuration } from './helpers'

describe('Helpers', () => {
  describe('GBPToEUR()', () => {
    it('should conver correct from GBP to EUR', () => {
      expect(GBPToEUR(1)).toBe('1.13')
    });
  });

  describe('getDuration()', () => {
    it('should return to correctly formatted string for the two arguments passed in', () => {
      expect(getDuration('2018-01-01T06:40:00+00:00', '2018-01-01T07:20:00+00:00')).toBe('0 hour(s) 40 minutes')
    })
  })
});