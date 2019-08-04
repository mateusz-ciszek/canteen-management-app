import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Food } from '../../../../models';
import { Observable } from 'rxjs';
import { FoodService } from '../../../../services/food.service';

@Injectable({
  providedIn: 'root',
})
export class FoodDetailsResolver implements Resolve<Food> {
  constructor(private foodService: FoodService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Food> | Promise<Food> | Food {
    const menuId: string = route.params['menuId'];
    const foodId: string = route.params['foodId'];
    return this.foodService.getFoodDetails(menuId, foodId);
  }
}
