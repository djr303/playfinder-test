import { createSelector } from '@ngrx/store';
import AppState, { Pitches, Results } from './pitches.state'

export const selectPitches = (state: { root: AppState }) => state?.root?.pitches;
export const selectResults = (state: { root: AppState }) => state?.root?.results;
export const selectUrlHash = (state: { root: AppState }) => state?.root?.urlHash;

export const selectSearchResults = createSelector(
  selectPitches,
  selectResults,
  selectUrlHash,
  (pitches: Pitches, results: Results, urlHash: string) => {

    if (Object.keys(pitches).length > 0 && Object.keys(results).length > 0) {
      return results[urlHash].pitches.map((id) => {
        const { attributes: { starts, ends, price, availabilities }} = pitches[id]

        return {
          id,
          starts,
          ends,
          price,
          availabilities
        }
      })
    } else {
      return [];
    }
  })