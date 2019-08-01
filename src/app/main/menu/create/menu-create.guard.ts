import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { MenuConfig } from '../../../models';

@Injectable()
export class MenuCreateGuard implements CanActivate {

  constructor(private menuService: MenuService, private router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    if (await this.checkCreateMenuAction(route)) {
      return true;
    }
    return this.router.createUrlTree(['/menu']);
  }

  async checkCreateMenuAction(route: ActivatedRouteSnapshot): Promise<boolean> {
    const parentConfig: MenuConfig = route.parent.data['config'];

    if (!!parentConfig) {
      return parentConfig.actions.createMenu;
    }

    const config: MenuConfig = await this.menuService.getConfig().toPromise();
    return config.actions.createMenu;
  }
}
