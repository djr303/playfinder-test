import { createAction, props } from '@ngrx/store';
import { JSONResponse } from './pitches.state'

export const GetPitchesAction = createAction(
  'GET_PITCHES',
  props<{ payload: { pitchId: string, starts: string, ends: string} }>()
);

export const SuccessGetPitchesAction = createAction(
  'SUCCESS_GET_PITCHES',
  props<{ payload: { data: JSONResponse, params: { pitchId: string, starts: string, ends: string }}}>()
);
