import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as PitchesActions from './pitches.action';
import { PitchesHttpService } from './pitches.httpservice';
import { JSONResponse } from './pitches.state'

@Injectable()
export class PitchesEffects {
  constructor(private pitchesHttpService: PitchesHttpService, private action$: Actions) { }

  GetPiteches$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(PitchesActions.GetPitchesAction),
      mergeMap(action => {
          const { pitchId, starts, ends } = action.payload;
          return this.pitchesHttpService.getPitches(pitchId, starts, ends).pipe(
          map((data: JSONResponse) => {
            return PitchesActions.SuccessGetPitchesAction({ payload: { data, params: { pitchId, starts, ends }}});
          })
        )} 
      )
    )
  );
}
