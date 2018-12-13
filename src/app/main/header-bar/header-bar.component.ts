import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.less']
})
export class HeaderBarComponent {
  constructor(private authService: AuthService) { }

  onLogoutButtonClick() {
    this.authService.logout();
  }
}
