import { Component, Input } from '@angular/core';

import { Portfolio }        from '../shared/portfolio.model';

@Component({
  moduleId: module.id,
  selector: 'jneal-portfolio-preview',
  templateUrl: './portfolio-preview.component.html',
  styleUrls: [ './portfolio-preview.component.css' ]
})
export class PortfolioPreviewComponent {
  @Input()
  portfolioList: Portfolio[];
}
