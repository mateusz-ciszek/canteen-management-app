import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Order } from '../../../models';
import { Observable } from 'rxjs';
import { OrderService } from '../../../services/order.service';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailsResolver implements Resolve<Order> {
  constructor(private orderService: OrderService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order> | Promise<Order> | Order {
    const orderId: string = route.params['orderId'];
    return this.orderService.getOrderDetails(orderId);
  }
}
