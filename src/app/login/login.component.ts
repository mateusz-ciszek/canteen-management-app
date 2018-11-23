import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor() {}

  ngOnInit() {}

  onLoginClick() {
    console.log(`Email: ${this.email}`);
    console.log(`Password: ${this.password}`);
  }

}
