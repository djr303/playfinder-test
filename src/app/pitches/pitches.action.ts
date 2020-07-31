import { createAction, props } from '@ngrx/store';
import { JSONResponse } from './pitches.state'

export const GetPitchesAction = createAction('GET_PITCHES');

export const SuccessGetPitchesAction = createAction(
  'SUCCESS_GET_PITCHES',
  props<{ payload: JSONResponse }>()
);
