import 'rxjs/add/operator/toPromise';

import { Injectable }    from '@angular/core';
import { Http }          from '@angular/http';

import { Portfolio }     from './portfolio';

@Injectable()
export class PortfolioService {
  private portfoliosUrl = 'http://jneal.com/api/portfolio.php';

  constructor(private http: Http) { }

  getPortfolios(): Promise<Portfolio[]> {
    return this.http.get(this.portfoliosUrl)
               .toPromise()
               .then(response => response.json() as Portfolio[])
               .catch(this.handleError);
  }

  getPortfolio(id: number): Promise<Portfolio> {
    const url = `${this.portfoliosUrl}?id=${id}`;
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
