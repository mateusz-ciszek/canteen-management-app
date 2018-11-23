import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  onLoginClick() {
    this.loginService.login(this.email, this.password).subscribe(result => console.log(result));
  }

}
