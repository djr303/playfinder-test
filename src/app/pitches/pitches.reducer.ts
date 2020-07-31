import { Action, createReducer, on } from '@ngrx/store';
import * as PitchesActions from './pitches.action';
import AppState, { initializeState } from './pitches.state';

const initialState = initializeState();

const reducer = createReducer(
  initialState,
  on(PitchesActions.GetPitchesAction, state => state),
  on(PitchesActions.SuccessGetPitchesAction, (state: AppState, { payload }) => {
    console.log('payload', payload);
    const { pitches, results } = state;
    const { data, meta: { filter: { starts, ends, fromTime, toTime }}} = payload
    const resultId = btoa(`${starts}${ends}${fromTime}${toTime}`)
    const returnedResults = {
      filter : {
        starts,
        ends,
        fromTime,
        toTime,
      },
      pitches: null,
    }

    returnedResults.pitches = data.map(p => p.id)

    const returnedPitches = data.reduce((a, c) => {
      a[c.id] = c
      return a
    }, {})

    // get unqiues hash for pitch result
    return { pitches: { ...pitches, ...returnedPitches }, results: { ...results, [resultId]: returnedResults }}
  }),
);

export function PitchesReducer(
  state: AppState | undefined,
  action: Action
): AppState {
  return reducer(state, action);
}
