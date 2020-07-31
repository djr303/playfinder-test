import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component';

import { DatePickerComponent } from './components/datePicker/datePicker.component'
import { ButtonComponent } from './components/button/button.component'

import { NgbTypeaheadModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { ResultsComponent } from './components/results/results.component'

import { PitchesEffects } from './pitches/pitches.effects';
import { PitchesReducer } from './pitches/pitches.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DatePickerComponent,
    ButtonComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbTypeaheadModule,
    NgbDatepickerModule,
    StoreModule.forRoot({ pitches: PitchesReducer }),
    EffectsModule.forRoot([PitchesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
