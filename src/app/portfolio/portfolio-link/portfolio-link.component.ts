import { Component, Input } from '@angular/core';

import { Portfolio }        from '../shared/portfolio.model';

@Component({
  moduleId: module.id,
  selector: 'jneal-portfolio-link',
  templateUrl: './portfolio-link.component.html'
})
export class PortfolioLinkComponent {
  @Input()
  portfolio: Portfolio;
}
