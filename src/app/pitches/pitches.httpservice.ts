import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JSONResponse } from './pitches.state'

@Injectable({
  providedIn: 'root'
})
export class PitchesHttpService {
  constructor(private httpclient: HttpClient) { }

  getPitches(pitchId: string, starts: string, ends: string): Observable<JSONResponse> {
    return this.httpclient.get<JSONResponse>(`https://api-v2.pfstaging.xyz/pitches/${encodeURIComponent(pitchId)}/slots?filter[starts]=${encodeURIComponent(starts)}&filter[ends]=${encodeURIComponent(ends)}`)
  }
}
