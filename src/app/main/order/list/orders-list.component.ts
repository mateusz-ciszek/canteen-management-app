import { Component } from '@angular/core';
import { Order } from '../../../models';
import { ActivatedRoute } from '@angular/router';
import { Selector } from '../../../common/Selector';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.less']
})
export class OrdersListComponent {

  orders: Order[];
  newOrdersCount: number = 0;
  readyOrdersCount: number = 0;
  selector: Selector<Order>;

  constructor(private route: ActivatedRoute) {
    this.orders = this.route.snapshot.data['orders'];
    this.selector = new Selector(this.orders);
    this.evaluateCounts();
  }

  private evaluateCounts(): void {
    this.newOrdersCount = this.orders.filter(order => order.state === 'SAVED').length;
    this.readyOrdersCount = this.orders.filter(order => order.state === 'READY').length;
  }
}
