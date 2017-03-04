import { Component, OnInit }     from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

import { Portfolio }             from './portfolio/shared/portfolio.model';
import { PortfolioService }      from './portfolio/shared/portfolio.service';

@Component({
  moduleId: module.id,
  selector: 'jneal-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  portfolioList: Portfolio[] = [];

  constructor(
    private portfolioService: PortfolioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPortfolioList();

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  getPortfolioList(): void {
    this.portfolioService.getPortfolioRecent().then(portfolioList => this.portfolioList = portfolioList);
  }
}
