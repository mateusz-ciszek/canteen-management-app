import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.less']
})
export class HeaderBarComponent {
  isLoggedIn: boolean;
  showNavigation: boolean = false;
  availableModulesMap: Map<Module, boolean>;

  constructor(
      private authService: AuthService,
      private configService: ConfigService) {

    this.isLoggedIn = authService.isAuthenticated();
    authService.authentication.subscribe(next => {
      this.isLoggedIn = next;
    });

    configService.$changes.subscribe(config => {
      if (config) {
        this.mapPermissions();
        this.showNavigation = true;
      }
    });
  }

  onLogoutButtonClick() {
    this.authService.logout();
  }

  private mapPermissions() {
    const permissions = this.configService.config.moduleAccessPermissions;
    this.availableModulesMap = new Map<Module, boolean>([
      ['MENU', permissions.menu],
      ['ORDER', permissions.order],
      ['WORKER', permissions.worker],
      ['SUPPLY', permissions.supply],
    ]);
  }
}

type Module = 'MENU' | 'ORDER' | 'WORKER' | 'SUPPLY';
