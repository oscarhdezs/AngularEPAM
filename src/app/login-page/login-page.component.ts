import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../service/authorization/authorization.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  isAuth: boolean;

  constructor(private authService: AuthorizationService) { }

  ngOnInit() {
    console.log('auth?' + this.authService.isAuthenticated());
  }

  login(name: HTMLInputElement, pwd: HTMLInputElement) {
    this.authService.login();
    console.log('loged:' + name.value + ' ' + pwd.value);
    this.isAuth = !this.isAuth;
    this.authService.setUserInfo(name.value);
  }

}
