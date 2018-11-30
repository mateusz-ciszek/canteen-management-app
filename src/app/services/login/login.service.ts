import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // This service uses HttpClient that ignores HttpInterceptors including one
  // that one which appends the beginning of a url, thus here is set whole url
  private readonly endpoint = 'http://212.191.92.88:51010/user/login';
  private http: HttpClient;

  constructor(
      private handler: HttpBackend,
      private authService: AuthService,
  ) {
    this.http = new HttpClient(handler);
  }

  login(email: string, password: string): Observable<boolean> {
    const request: LoginRequest = { email, password };
    return this.http.post<LoginResponse>(this.endpoint, request).pipe(
      map(result => {
        if (result.token) {
          return this.authService.authenticate(result);
        }
        return false;
      }),
    );
  }
}

export class LoginRequest {
  email: string;
  password: string;
}

export class LoginResponse {
  token: string;
  message: string;
}
