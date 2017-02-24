import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Portfolio }         from '../shared/portfolio.model';
import { PortfolioService }  from '../shared/portfolio.service';

@Component({
  moduleId: module.id,
  selector: 'jneal-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: [ './portfolio-list.component.css' ]
})
export class PortfolioListComponent implements OnInit {
  portfolioList: Portfolio[];
  selectedPortfolio: Portfolio;

  constructor(
    private router: Router,
    private portfolioService: PortfolioService
  ) { }

  getPortfolioList(): void {
    this.portfolioService.getPortfolioList().then(portfolioList => this.portfolioList = portfolioList);
  }

  ngOnInit(): void {
    this.getPortfolioList();
  }

  onSelect(portfolio: Portfolio): void {
    this.selectedPortfolio = portfolio;
  }

  gotoDetail(): void {
    this.router.navigate(['/portfolio', this.selectedPortfolio.id]);
  }
}
