import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../../models';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.less']
})
export class OrderDetailsComponent implements OnInit {

  order: Order;
  expanded: boolean;
  hasComment: boolean;

  constructor(private route: ActivatedRoute) {
    this.order = route.snapshot.data['order'];
  }

  ngOnInit(): void {
    this.hasComment = this.order.comment && this.order.comment !== '';
    this.expanded = this.hasComment;
  }

  contact() {
    location.href = `mailto:${this.order.user.email}`;
  }

  changeCommentVisibility() {
    this.expanded = !this.expanded;
  }

}
