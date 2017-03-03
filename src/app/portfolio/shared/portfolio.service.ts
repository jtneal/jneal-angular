import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Portfolio }  from './portfolio.model';

@Injectable()
export class PortfolioService {
  private portfolioUrl = 'http://localhost/api/portfolio';

  constructor(private http: Http) {}

  getPortfolioList(url: string): Promise<Portfolio[]> {
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Portfolio[])
      .catch(this.handleError);
  }

  getPortfolioAll(): Promise<Portfolio[]> {
    return this.getPortfolioList(this.portfolioUrl);
  }

  getPortfolioRecent(): Promise<Portfolio[]> {
    return this.getPortfolioList(`${this.portfolioUrl}?filter=recent`);
  }

  getPortfolio(id: number): Promise<Portfolio> {
    const url = `${this.portfolioUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Portfolio)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
