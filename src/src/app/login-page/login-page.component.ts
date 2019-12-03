import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../service/authorization/authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthorizationService,
              private router: Router) { }

  ngOnInit() {
    console.log('is auth?' + this.authService.isAuthenticated());
  }

  login(name: HTMLInputElement, pwd: HTMLInputElement) {
    this.authService.login();
    this.authService.setUserInfo(name.value + pwd.value);
    this.router.navigate(['courses']);
  }

}
