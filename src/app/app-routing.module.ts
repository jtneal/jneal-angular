import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { HomeComponent }          from './home/home.component';
import { AboutComponent }         from './about/about.component';
import { SkillsComponent }        from './skills/skills.component';
import { PortfolioItemComponent } from './portfolio/portfolio-item/portfolio-item.component';
import { PortfolioListComponent } from './portfolio/portfolio-list/portfolio-list.component';
import { ResumeComponent }        from './resume/resume.component';
import { ContactComponent }       from './contact/contact.component';
import { PageNotFoundComponent }  from './error/not-found.component';

const routes: Routes = [
  { path: '',                     component: HomeComponent },
  { path: 'about',                component: AboutComponent },
  { path: 'skills',               component: SkillsComponent },
  { path: 'portfolio/:id/:alias', component: PortfolioItemComponent },
  { path: 'portfolio/:id',        component: PortfolioItemComponent },
  { path: 'portfolio',            component: PortfolioListComponent },
  { path: 'resume',               component: ResumeComponent },
  { path: 'contact',              component: ContactComponent },
  { path: '**',                   component: PageNotFoundComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
