import { Component, Input } from '@angular/core';
import { Selector } from '../Selector';

@Component({
  selector: 'app-selector-summary',
  templateUrl: './selector-summary.component.html',
  styleUrls: ['./selector-summary.component.less']
})
export class SelectorSummaryComponent {

  @Input()
  selector: Selector<any>;

}
