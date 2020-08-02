import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component';

import { DatePickerComponent } from './components/datePicker/datePicker.component'
import { ButtonComponent } from './components/button/button.component'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PitchesEffects } from './pitches/pitches.effects';
import { PitchesReducer } from './pitches/pitches.reducer';

import { HomePage } from './pages/home/home.page';
import { ResultsPage } from './pages/results/results.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: ':pitchId/:starts/:ends', component: ResultsPage },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DatePickerComponent,
    ButtonComponent,
    HomePage,
    ResultsPage
  ],
  imports: [
    BrowserModule,
    NgbModule,
    StoreModule.forRoot({ root: PitchesReducer }),
    EffectsModule.forRoot([PitchesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: environment.production,
    }),
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
