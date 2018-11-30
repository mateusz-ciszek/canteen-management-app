import { Component } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  emailError: string;
  passwordError: string;
  otherError: string;

  constructor(
      private authService: AuthService,
      private loginService: LoginService,
      private router: Router,
  ) {
    if (authService.isAuthenticated()) {
      this.router.navigate(['/main']);
    }
  }

  onLoginClick() {
    if (this.validate()) {
      this.loginService.login(this.email, this.password).pipe(
        catchError(err => {
          this.otherError = 'Could not log in. Please check your email and password';
          return throwError(err);
        })
      ).subscribe(result => {
        if (result) {
          this.router.navigate(['/main']);
        } else {
          this.otherError = 'Only administrators can login here';
        }
      });
    }
  }

  private validate(): boolean {
    let isCorrect = true;
    this.emailError = '';
    this.passwordError = '';
    this.otherError = '';

    const emailRegex = new RegExp('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-'
      + '\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a'
      + '-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-'
      + '\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])');

    if (!emailRegex.test(this.email)) {
      isCorrect = false;
      this.emailError = 'This is not a valid email';
    }

    if (this.email.length === 0) {
      isCorrect = false;
      this.emailError = 'Email can\'t be empty';
    }

    if (this.password.length === 0) {
      isCorrect = false;
      this.passwordError = 'Password can\'t be empty';
    }

    return isCorrect;
  }

}
