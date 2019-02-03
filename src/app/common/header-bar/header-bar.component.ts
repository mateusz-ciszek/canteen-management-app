import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.less']
})
export class HeaderBarComponent {
  isLoggedIn: boolean;

  constructor(private authService: AuthService) {
    this.isLoggedIn = authService.isAuthenticated();
    authService.authentication.subscribe(next => {
      this.isLoggedIn = next;
    });
  }

  onLogoutButtonClick() {
    this.authService.logout();
  }
}
