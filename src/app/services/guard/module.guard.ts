import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';

@Injectable()
export class ModuleGuard implements CanActivate {

  private moduleToPermissionMap: Map<Path, boolean>;
  // TODO: Add component that user gets redirected when there is no module available (has no permissions)
  private nextModuleMap: Map<Path, Path> = new Map<Path, Path>([
    ['menu', 'order'],
    ['order', 'employees'],
    ['employees', 'supply'],
  ]);

  constructor(
      configService: ConfigService,
      private router: Router) {

    configService.$changes.subscribe(config => {
      const permissions = config.moduleAccessPermissions;
      this.moduleToPermissionMap = new Map<Path, boolean>([
        ['menu', permissions.menu],
        ['order', permissions.order],
        ['employees', permissions.worker],
        ['supply', permissions.supply],
      ]);
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const path: Path = route.routeConfig.path as Path;
    if (this.moduleToPermissionMap.get(path)) {
      return true;
    } else {
      return this.router.createUrlTree(['/main/', this.nextModuleMap.get(path)]);
    }
  }
}

type Path = 'menu' | 'order' | 'employees' | 'supply';
