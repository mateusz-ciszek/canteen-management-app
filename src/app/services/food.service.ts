import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateFoodModel, Food } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getFoodDetails(menuId: string, foodId: string): Observable<Food> {
    const url: string = `/food/${foodId}`;
    return this.http.get<Food>(url);
  }

  saveFood(menuId: string, request: CreateFoodModel): Observable<any> {
    const url: string = `/menu/${menuId}/food`;
    return this.http.post(url, request);
  }

  deleteFoods(ids: string[]): Observable<void> {
    return this.http.request<void>('DELETE', '/food', { body: { ids } });
  }
}
