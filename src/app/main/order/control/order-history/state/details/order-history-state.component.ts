import { Component, Input, OnInit } from '@angular/core';
import { OrderState } from '../../../../../../models';

@Component({
  selector: 'app-order-history-state',
  templateUrl: './order-history-state.component.html',
  styleUrls: ['./order-history-state.component.less']
})
export class OrderHistoryStateComponent implements OnInit {

  @Input()
  orderState: OrderState;

  ngOnInit(): void {
    console.log(this.orderState);
  }

}
