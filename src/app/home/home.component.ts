import { Component, OnInit } from '@angular/core';

import { Portfolio }         from '../portfolio/shared/portfolio.model';
import { PortfolioService }  from '../portfolio/shared/portfolio.service';

@Component({
  moduleId: module.id,
  selector: 'jneal-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
  portfolioList: Portfolio[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getPortfolioList()
      .then(portfolioList => this.portfolioList = portfolioList.slice(0, 6));
  }
}
