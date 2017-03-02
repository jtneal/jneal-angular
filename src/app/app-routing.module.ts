import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { HomeComponent }          from './home/home.component';
import { AboutComponent }         from './about/about.component';
import { SkillsComponent }       from './skills/skills.component';
import { PortfolioListComponent } from './portfolio/portfolio-list/portfolio-list.component';
import { PortfolioItemComponent } from './portfolio/portfolio-item/portfolio-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',                 component: HomeComponent },
  { path: 'about',                component: AboutComponent },
  { path: 'skills',               component: SkillsComponent },
  { path: 'portfolio/:id/:alias', component: PortfolioItemComponent },
  { path: 'portfolio/:id',        component: PortfolioItemComponent },
  { path: 'portfolio',            component: PortfolioListComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
