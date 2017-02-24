import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Portfolio }         from './portfolio';
import { PortfolioService }  from './portfolio.service';

@Component({
  moduleId: module.id,
  selector: 'jneal-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: [ './portfolios.component.css' ]
})
export class PortfoliosComponent implements OnInit {
  portfolios: Portfolio[];
  selectedPortfolio: Portfolio;

  constructor(
    private router: Router,
    private portfolioService: PortfolioService
  ) { }

  getPortfolios(): void {
    this.portfolioService.getPortfolios().then(portfolios => this.portfolios = portfolios);
  }

  ngOnInit(): void {
    this.getPortfolios();
  }

  onSelect(portfolio: Portfolio): void {
    this.selectedPortfolio = portfolio;
  }

  gotoDetail(): void {
    this.router.navigate(['/portfolios', this.selectedPortfolio.id]);
  }
}
