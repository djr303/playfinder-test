import { Action, createReducer, on } from '@ngrx/store';
import * as PitchesActions from './pitches.action';
import AppState, { initializeState } from './pitches.state';

const initialState = initializeState();

export const reducer = createReducer(
  initialState,
  on(PitchesActions.GetPitchesAction, state => state),
  on(PitchesActions.SuccessGetPitchesAction, (state: AppState, { payload }) => {
    const { pitches, results } = state;
    const { data, meta: { filter: { starts, ends, fromTime, toTime }}} = payload.data;

    const pitchIdParam = payload.params.pitchId;
    const startsParam = payload.params.starts;
    const endsParam = payload.params.ends;

    const resultId = btoa(`${pitchIdParam}${startsParam}${endsParam}`)
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
    return { urlHash: resultId, pitches: { ...pitches, ...returnedPitches }, results: { ...results, [resultId]: returnedResults }}
  }),
);

export function PitchesReducer(
  state: AppState | undefined,
  action: Action
): AppState {
  return reducer(state, action);
}
