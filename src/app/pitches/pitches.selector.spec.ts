import { selectSearchResults } from './pitches.selectors'

const getState = () => ({
  urlHash: 'MzI5OTAyMDE4LTEtMTMyMDE4LTEtMjA=',
  pitches: {
    '451272': {
      type: 'slots',
      id: '451272',
      attributes: {
        starts: '2018-01-13T10:00:00+00:00',
        ends: '2018-01-13T10:40:00+00:00',
        price: '12.05',
        admin_fee: '0.00',
        currency: 'GBP',
        availabilities: 0
      }
    },
    '451273': {
      type: 'slots',
      id: '451273',
      attributes: {
        starts: '2018-01-13T10:40:00+00:00',
        ends: '2018-01-13T11:20:00+00:00',
        price: '12.05',
        admin_fee: '0.00',
        currency: 'GBP',
        availabilities: 0
      }
    },
    '451274': {
      type: 'slots',
      id: '451274',
      attributes: {
        starts: '2018-01-13T11:20:00+00:00',
        ends: '2018-01-13T12:00:00+00:00',
        price: '12.05',
        admin_fee: '0.00',
        currency: 'GBP',
        availabilities: 0
      }
    }
  },
  results: {
    'MzI5OTAyMDE4LTEtMTMyMDE4LTEtMjA=': {
      filter: {
        starts: '2018-01-13',
        ends: '2018-01-20',
        fromTime: '00:00',
        toTime: '23:59'
      },
      pitches: [
        '451272',
        '451273',
        '451274',
      ]
    }
  }
})

describe('Selector: Pitches', () => {
  it('should return correct array of object when state is passed in', () => {
    const state = getState()
    const result = selectSearchResults({ root: state })
    const expected = [
    {
      availabilities: 0,
      ends: "2018-01-13T10:40:00+00:00",
      id: "451272",
      price: "12.05",
      starts: "2018-01-13T10:00:00+00:00",
    },
    {
      availabilities: 0,
      ends: "2018-01-13T11:20:00+00:00",
      id: "451273",
      price: "12.05",
      starts: "2018-01-13T10:40:00+00:00"
    },
    {
      availabilities: 0,
      ends: "2018-01-13T12:00:00+00:00",
      id: "451274",
      price: "12.05",
      starts: "2018-01-13T11:20:00+00:00",
    }]
    expect(result).toEqual(expected) 
  });
})
