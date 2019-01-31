import { Component, OnChanges } from '@angular/core';
import { Order } from '../../../models';
import { ActivatedRoute } from '@angular/router';
import { Selector } from '../../../common/Selector';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.less']
})
export class OrdersListComponent implements OnChanges {

  orders: Order[];
  newOrdersCount: number = 0;
  readyOrdersCount: number = 0;
  selector: Selector<Order> = new Selector<Order>([]);

  containsSaved: boolean = false;
  containsReady: boolean = false;
  headerTitle: string = 'Orders';

  constructor(private route: ActivatedRoute, private orderService: OrderService) {
    const orders = this.route.snapshot.data['orders'];
    this.assignOrders(orders);
  }

  ngOnChanges(): void {
    const orders = this.selector.getSelectedItems();
    this.containsSaved = !!orders.find(order => order.currentState.state === 'SAVED');
    this.containsReady = !!orders.find(order => order.currentState.state === 'READY');
    this.headerTitle = this.selector.getSelectedCount() ? 'Selected orders' : 'Orders';
  }

  refreshOrders(): void {
    this.assignOrders([]);
    this.ngOnChanges();
    this.orderService.getOrders().subscribe(orders => {
      this.assignOrders(orders);
      this.ngOnChanges();
    });
  }

  confirmOrders() {
    // TODO
    console.log('TODO');
  }

  rejectOrders() {
    // TODO
    console.log('TODO');
  }

  serveOrders() {
    // TODO
    console.log('TODO');
  }

  private assignOrders(orders: Order[]): void {
    this.orders = orders;
    this.selector.setItems(orders);
    this.evaluateCounts();
  }

  private evaluateCounts(): void {
    const orders: Order[] = this.selector.getSelectedCount() ? this.selector.getSelectedItems() : this.orders;
    this.newOrdersCount = orders.filter(order => order.currentState.state === 'SAVED').length;
    this.readyOrdersCount = orders.filter(order => order.currentState.state === 'READY').length;
  }
}
