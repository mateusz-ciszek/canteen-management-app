import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Order } from '../../../models';
import { Observable } from 'rxjs';
import { OrderService } from '../../../services/order.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrdersListResolver implements Resolve<Order[]> {
  constructor(private orderService: OrderService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order[]> | Promise<Order[]> | Order[] {
    return this.orderService.getOrders();
  }
}
