import 'pace';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { routing } from './app.routing';
import { AppConfig } from './app.config';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';
import { HttpModule, Http, RequestOptions } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
    }),
    routing   
  ],
  providers: [AuthGuard, AppConfig, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
