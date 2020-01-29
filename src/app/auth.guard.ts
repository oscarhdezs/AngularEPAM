import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthorizationService} from './service/authorization/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private  authService: AuthorizationService,
              private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree>
    | Promise<boolean
    | UrlTree> | boolean
    | UrlTree {
      console.log('Here in the guard****************');
      if ( this.authService.isAuthenticated() === 'true') {
        return true;
      }
      const loginPageUrlTree = this.router.parseUrl('/login');

      return loginPageUrlTree;
  }
}
