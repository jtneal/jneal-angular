import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { HttpModule }             from '@angular/http';

import { AppRoutingModule }       from './app-routing.module';

import { AppComponent }           from './app.component';
import { HomeComponent }          from './home/home.component';
import { PortfolioItemComponent } from './portfolio/portfolio-item/portfolio-item.component';
import { PortfolioListComponent } from './portfolio/portfolio-list/portfolio-list.component';
import { PortfolioService }       from './portfolio/shared/portfolio.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioItemComponent,
    PortfolioListComponent
  ],
  providers: [ PortfolioService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
