import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private LOGIN_ENDPOINT = 'http://212.191.92.88:51010/user/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<LoginResponse> {
    const request: LoginRequest = { email, password };
    return this.http.post<LoginResponse>(this.LOGIN_ENDPOINT, request);
  }
}

class LoginRequest {
  email: string;
  password: string;
}

class LoginResponse {
  token: string;
  message: string;
  admin: boolean;
}
