import { Component, OnInit } from '@angular/core';

import { Portfolio }         from './portfolio/shared/portfolio.model';
import { PortfolioService }  from './portfolio/shared/portfolio.service';

@Component({
  moduleId: module.id,
  selector: 'jneal-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  portfolioList: Portfolio[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.getPortfolioList();
  }

  getPortfolioList(): void {
    this.portfolioService.getPortfolioRecent().then(portfolioList => this.portfolioList = portfolioList);
  }
}
