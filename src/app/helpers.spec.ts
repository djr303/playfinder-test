import { GBPToEUR } from './helpers'

describe('Helpers', () => {
  it('should conver correct from GBP to EUR', () => {
    expect(GBPToEUR(1)).toBe(1.13)
  })
})