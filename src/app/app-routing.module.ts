import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { HomeComponent }            from './home.component';
import { PortfoliosComponent }      from './portfolios.component';
import { PortfolioDetailComponent } from './portfolio-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',           component: HomeComponent },
  { path: 'portfolios/:id', component: PortfolioDetailComponent },
  { path: 'portfolios',     component: PortfoliosComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
