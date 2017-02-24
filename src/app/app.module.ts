import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';

import { AppComponent }             from './app.component';
import { HomeComponent }            from './home.component';
import { PortfolioDetailComponent } from './portfolio-detail.component';
import { PortfoliosComponent }      from './portfolios.component';
import { PortfolioService }         from './portfolio.service';

import { AppRoutingModule }         from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioDetailComponent,
    PortfoliosComponent
  ],
  providers: [ PortfolioService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
