import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ConfigGuard implements CanActivateChild {

  constructor(private configService: ConfigService) {}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (!this.configService.config) {
      return this.configService.init().pipe(
        map(() => true),
      );
    }
    return !!this.configService.config;
  }
}
