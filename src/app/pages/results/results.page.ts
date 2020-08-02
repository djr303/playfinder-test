import { Component, AfterViewInit } from '@angular/core';
import { select, Store } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as PitchesActions from '../../pitches/pitches.action';
import { selectSearchResults } from '../../pitches/pitches.selectors';
import AppState from '../../pitches/pitches.state';
import { ActivatedRoute } from '@angular/router';
import { 
  formatDate, 
  getDuration, 
  formatPriceEUR,
  formatPriceGBP
} from '../../helpers'

@Component({
  selector: 'app-page-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss']
})
export class ResultsPage implements AfterViewInit {

  private results$: Observable<any>
  private resultsSubscription: Subscription
  public results: any;
  public resultsSize: number;
  public page = 1;
  public pageSize = 10;
  public pagedResults: any[] = [];

  public refreshResults(): void {
    this.pagedResults = this.results
       .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  public formatDate = formatDate
  public getDuration = getDuration
  public formatPriceGBP = formatPriceGBP
  public formatPriceEUR = formatPriceEUR

  constructor(private store: Store<{ root: AppState }>, private route: ActivatedRoute) {
    this.results$ = store.pipe(select(selectSearchResults))
  }

  ngAfterViewInit() {
    this.resultsSubscription = this.results$
      .pipe(
        map(results => { 
          this.results = results;
          this.resultsSize = results.length;
          this.refreshResults()
        })
      )
      .subscribe();

    this.route.params.subscribe(params => {
      const { pitchId, starts, ends } = params;
      this.store.dispatch(PitchesActions.GetPitchesAction({ payload: { pitchId, starts, ends } }));
    });
  }
}