import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../../models';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.less']
})
export class OrderDetailsComponent {

  order: Order;

  constructor(private route: ActivatedRoute) {
    this.order = route.snapshot.data['order'];
  }

  contact() {
    location.href = `mailto:${this.order.user.email}`;
  }

}
