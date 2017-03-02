import { Component, OnInit } from '@angular/core';

import { Portfolio }         from '../shared/portfolio.model';
import { PortfolioService }  from '../shared/portfolio.service';

@Component({
  moduleId: module.id,
  selector: 'jneal-portfolio-list',
  templateUrl: './portfolio-list.component.html'
})
export class PortfolioListComponent implements OnInit {
  portfolioList: Portfolio[];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.getPortfolioList();
  }

  getPortfolioList(): void {
    this.portfolioService.getPortfolioAll().then(portfolioList => this.portfolioList = portfolioList);
  }
}
