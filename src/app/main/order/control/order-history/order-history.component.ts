import { Component, Input, OnInit } from '@angular/core';
import { OrderState } from '../../../../models';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.less'],
})
export class OrderHistoryComponent implements OnInit {

  @Input()
  history: OrderState[];

  selectedState: OrderState;

  ngOnInit(): void {
    this.selectedState = this.history[this.history.length - 1];
  }

  changeDetails(index: number): void {
    this.selectedState = this.history[index];
  }
}
