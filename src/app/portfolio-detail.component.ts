import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Portfolio }              from './portfolio';
import { PortfolioService }       from './portfolio.service';

@Component({
  moduleId: module.id,
  selector: 'jneal-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: [ './portfolio-detail.component.css' ]
})
export class PortfolioDetailComponent implements OnInit {
  portfolio: Portfolio;

  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.portfolioService.getPortfolio(+params['id']))
      .subscribe(portfolio => this.portfolio = portfolio);
  }

  goBack(): void {
    this.location.back();
  }
}
