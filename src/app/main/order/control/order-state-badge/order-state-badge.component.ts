import { Component, Input } from '@angular/core';
import { State } from '../../../../models';

@Component({
  selector: 'app-order-state-badge',
  templateUrl: './order-state-badge.component.html',
  styleUrls: ['./order-state-badge.component.less']
})
export class OrderStateBadgeComponent {

  @Input()
  state: State;

  isSaved(): boolean {
    return this.state === 'SAVED';
  }

  isServed(): boolean {
    return this.state === 'SERVED';
  }

  isRejected(): boolean {
    return this.state === 'REJECTED';
  }

  isReady(): boolean {
    return this.state === 'READY';
  }

}
