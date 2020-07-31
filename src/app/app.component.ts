import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store'
import { Observable, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import * as PitchesActions from './pitches/pitches.action';
import PitchesState from './pitches/pitches.state'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private pitches$: Observable<any>
  private pitchesSubscription: Subscription
  public pitches: any
  public pitchesError: any

  constructor(private store: Store<{ pitches: PitchesState }>){
    this.pitches$ = store.pipe(select('pitches'))
  }
  
  ngOnInit() {
    this.pitchesSubscription = this.pitches$
      .pipe(
        map(x => {
          this.pitches = x.pitches;
          this.pitchesError = x.pitchesError;
        })
      )
      .subscribe();

    this.store.dispatch(PitchesActions.GetPitchesAction());
  }
}
