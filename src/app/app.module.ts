import { NgModule }                      from '@angular/core';
import { BrowserModule }                 from '@angular/platform-browser';
import { HttpModule }                    from '@angular/http';

import { AppRoutingModule }              from './app-routing.module';

import { AppComponent }                  from './app.component';
import { HomeComponent }                 from './home/home.component';
import { AboutComponent }                from './about/about.component';
import { SkillsComponent }               from './skills/skills.component';
import { PortfolioItemComponent }        from './portfolio/portfolio-item/portfolio-item.component';
import { PortfolioLinkComponent }        from './portfolio/portfolio-link/portfolio-link.component';
import { PortfolioListComponent }        from './portfolio/portfolio-list/portfolio-list.component';
import { PortfolioPreviewComponent }     from './portfolio/portfolio-preview/portfolio-preview.component';
import { PortfolioService }              from './portfolio/shared/portfolio.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioItemComponent,
    PortfolioLinkComponent,
    PortfolioListComponent,
    PortfolioPreviewComponent
  ],
  providers: [ PortfolioService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
