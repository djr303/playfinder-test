import { reducer } from './pitches.reducer';
import { initializeState, Pitches } from './pitches.state';
import * as PitchesActions from './pitches.action';

describe('Reducer: Pitches', () => {
  it('should return state on GetPitchesAction', () => {
    const initialState = initializeState()
    const action = { type: 'GET_PITCHES '}
    const expected = { urlHash: null, pitches: {}, results: {} };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  it('should return correct state object with new pitches and correct results array', () => {
    const initialPitches: Pitches = {
      '1': {
        id: '1',
        type: 'test-pitch-type-1',
        attributes: {
          starts: 'test-starts-1',
          ends: 'test-ends-1',
          price: 'test-price-1',
          admin_fee: 'test-admin_fee-1',
          currency: 'test-currency-1',
          availabilities: 1
        }
      },
      '2': {
        id: '2',
        type: 'test-pitch-type-2',
        attributes: {
          starts: 'test-starts-2',
          ends: 'test-ends-2',
          price: 'test-price-2',
          admin_fee: 'test-admin_fee-2',
          currency: 'test-currency-2',
          availabilities: 2
        }
      },
      '3': {
        id: '3',
        type: 'test-pitch-type-3',
        attributes: {
          starts: 'test-starts-3',
          ends: 'test-ends-3',
          price: 'test-price-3',
          admin_fee: 'test-admin_fee-3',
          currency: 'test-currency-3',
          availabilities: 3
        }
      }
    }

    const jsonResponse = {
      meta: {
        total_items: 1,
        filter: {
          starts: 'test-starts-1',
          ends: 'test-ends-1',
          fromTime: 'test-fromTime-1',
          toTime: 'test-toTime-1'
        }
      },
      data: [
        {
          type: 'test-pitch-type-1',
          id: "1",
          attributes: {
            starts: 'test-starts-1',
            ends: 'test-ends-1',
            price: 'test-price-1',
            admin_fee: 'test-admin_fee-1',
            currency: 'test-currency-1',
            availabilities: 1
          }
        },
        {
          type: 'test-pitch-type-4',
          id: "4",
          attributes: {
            starts: 'test-starts-4',
            ends: 'test-ends-4',
            price: 'test-price-4',
            admin_fee: 'test-admin_fee-4',
            currency: 'test-currency-4',
            availabilities: 1
          }
        }
      ]
    } 

    const action = { type: 'SUCCESS_GET_PITCHES', payload: { data: jsonResponse, params: { pitchId: '1', starts: '2020-01-01', ends: '2020-01-02'} } }

    const expectedPitches = { ...initialPitches, 
      ['4']: {
        id: '4',
        type: 'test-pitch-type-4',
        attributes: {
          starts: 'test-starts-4',
          ends: 'test-ends-4',
          price: 'test-price-4',
          admin_fee: 'test-admin_fee-4',
          currency: 'test-currency-4',
          availabilities: 1
        }
      }
    }
    
    const { meta: { filter: { starts, ends, fromTime, toTime }}} = jsonResponse
    const resultId = btoa(`${'1'}${'2020-01-01'}${'2020-01-02'}`);

    const expectedResults = {
      [resultId]: {
        filter: {
          starts: 'test-starts-1',
          ends: 'test-ends-1',
          fromTime: 'test-fromTime-1',
          toTime: 'test-toTime-1'
        },
        pitches: ['1', '4']
      }
    }

    const expected = { urlHash: resultId, pitches: expectedPitches, results: expectedResults }

    const result = reducer(
      { 
        urlHash: null,
        pitches: initialPitches, 
        results: {}
      }, 
        action)

    expect(result).toEqual(expected);
  }) 

});