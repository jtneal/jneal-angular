import { Injectable } from '@angular/core';

import { Portfolio }  from './portfolio';
import { PORTFOLIOS } from './mock-portfolios';

@Injectable()
export class PortfolioService {
  getPortfolios(): Promise<Portfolio[]> {
    return Promise.resolve(PORTFOLIOS);
  }

  getPortfolio(id: number): Promise<Portfolio> {
    return this.getPortfolios()
               .then(portfolios => portfolios.find(portfolio => portfolio.id === id));
  }
}
