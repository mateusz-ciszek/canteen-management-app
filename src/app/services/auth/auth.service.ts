import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginResponse } from '../login/login.service';
import { Router } from '@angular/router';
import { noop, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public readonly authentication: Subject<boolean> = new Subject();

  constructor(
      private jwtHelper: JwtHelperService,
      private router: Router,
  ) { }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenContent');
    this.router.navigate(['/login']).then(noop);
    this.authentication.next(false);
  }

  public authenticate(loginResponse: LoginResponse): boolean {
    const decoded: LoginResponseDecoded = this.jwtHelper.decodeToken(loginResponse.token);
    let success: boolean = false;
    if (decoded.admin) {
      localStorage.setItem('token', loginResponse.token);
      localStorage.setItem('tokenContent', JSON.stringify(decoded));
      success = true;
    }

    this.authentication.next(success);
    return success;
  }

  public isAuthenticated(): boolean {
    const token = this.jwtHelper.tokenGetter();
    return !!token;
    // return !this.jwtHelper.isTokenExpired(token);
  }
}

interface LoginResponseDecoded {
  _id: string;
  admin: boolean;
  email: string;
  iat: number;
}
