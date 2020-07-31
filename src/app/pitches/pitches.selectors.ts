import { createSelector } from '@ngrx/store';
import AppState from './pitches.state'

export const selectPitches = (state: AppState) => state.pitches;
export const selectResults = (state: AppState) => state.results;

// START HERE

export const selectVisibleBooks = createSelector(
  selectPitches,
  selectResults,
  (selectedUser: User, allBooks: Book[]) => {
    if (selectedUser && allBooks) {
      return allBooks.filter((book: Book) => book.userId === selectedUser.id);
    } else {
      return allBooks;
    }
  }