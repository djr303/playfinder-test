import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JSONResponse } from './pitches.state'

@Injectable({
  providedIn: 'root'
})
export class PitchesHttpService {
  constructor(private httpclient: HttpClient) {}

  // getPitches(pitchId: number, starts: string, ends: string): Observable<JSONResponse> {
  getPitches(): Observable<JSONResponse> {

    return this.httpclient.get<JSONResponse>(`https://api-v2.pfstaging.xyz/pitches/32990/slots?filter%5Bstarts%5D=2018-01-09&filter%5Bends%5D=2018-01-15`);

    /* return this.httpclient.get<JSONResponse>(`https://api-v2.pfstaging.xyz/pitches/ \
      ${encodeURIComponent(pitchId)}/slots? \
      filter[starts]=${encodeURIComponent(starts)}& \
      filter[ends]=${encodeURIComponent(ends)}`) */
  }
}
