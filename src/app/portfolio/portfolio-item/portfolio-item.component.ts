import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Portfolio }              from '../shared/portfolio.model';
import { PortfolioService }       from '../shared/portfolio.service';

@Component({
  moduleId: module.id,
  selector: 'jneal-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: [ './portfolio-item.component.css' ]
})
export class PortfolioItemComponent implements OnInit {
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
