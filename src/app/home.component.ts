import { Component, OnInit } from '@angular/core';

import { Portfolio }         from './portfolio';
import { PortfolioService }  from './portfolio.service';

@Component({
  moduleId: module.id,
  selector: 'jneal-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
  portfolios: Portfolio[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getPortfolios()
      .then(portfolios => this.portfolios = portfolios.slice(0, 6));
  }
}
