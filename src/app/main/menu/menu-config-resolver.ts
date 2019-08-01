import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { MenuConfig } from '../../models';
import { Observable } from 'rxjs';
import { MenuService } from '../../services/menu.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuConfigResolver implements Resolve<MenuConfig> {
  constructor(private menuService: MenuService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MenuConfig> {
    return this.menuService.getConfig();
  }
}
