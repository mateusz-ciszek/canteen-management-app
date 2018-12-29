import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Menu } from '../../../models';
import { MenuService } from '../../../services/menu.service';

@Injectable({
  providedIn: 'root',
})
export class MenuListResolver implements Resolve<Menu[]> {
  constructor(private menuService: MenuService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Menu[]> | Promise<Menu[]> | Menu[] {
    return this.menuService.getMenuList();
  }
}
