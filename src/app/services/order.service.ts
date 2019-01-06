import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    const url = '/order/';
    return this.http.get<Orders>(url).pipe(map(obj => obj.orders));
  }
}

interface Orders {
  orders: Order[];
}
