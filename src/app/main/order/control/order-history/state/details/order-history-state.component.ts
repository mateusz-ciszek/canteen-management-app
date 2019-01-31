import { Component, Input } from '@angular/core';
import { OrderState } from '../../../../../../models';

@Component({
  selector: 'app-order-history-state',
  templateUrl: './order-history-state.component.html',
  styleUrls: ['./order-history-state.component.less']
})
export class OrderHistoryStateComponent {

  @Input()
  orderState: OrderState;

}
