import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../service/authorization/authorization.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public courses: Observable<any>;

  constructor(private authService: AuthorizationService,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit() {
    console.log('is auth?' + this.authService.isAuthenticated());
  }

  login(userName: HTMLInputElement, password: HTMLInputElement) {
     this.authService.login(userName.value, password.value ).subscribe( response => {
       this.router.navigate(['courses']);
     });
  }

}
