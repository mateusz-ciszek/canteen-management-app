import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Menu } from '../../../models';
import { MenuService } from '../../../services/menu.service';

@Injectable({
  providedIn: 'root',
})
export class MenuDetailsResolver implements Resolve<Menu> {
  constructor(private menuService: MenuService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Menu> | Promise<Menu> | Menu {
    const menuId: string = route.params['menuId'];
    return this.menuService.getMenuDetails(menuId);
  }
}
