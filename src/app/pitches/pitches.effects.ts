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
  constructor(private pitchesHttpService: PitchesHttpService, private action$: Actions) {}

  GetPiteches$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(PitchesActions.GetPitchesAction),
      mergeMap(action =>
        this.pitchesHttpService.getPitches().pipe(
          map((data: JSONResponse) => {
            return PitchesActions.SuccessGetPitchesAction({ payload: data });
          })
        )
      )
    )
  );
}
