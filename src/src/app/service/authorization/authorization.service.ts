import {Inject, Injectable} from '@angular/core';
import {APP_STORAGE} from '../../core/core.module';

@Injectable({
  providedIn: 'root'
})
export class  AuthorizationService {

  constructor(@Inject(APP_STORAGE) private  storage) { }

  login() {
    this.storage.setItem('authenticated', true);
    console.log('User Logged:' + this.storage.getItem('authenticated'));
  }

  logout() {
    this.storage.setItem('authenticated', false);
    console.log('User Logged out:' + this.storage.getItem('authenticated'));
  }

  isAuthenticated(): string {
    console.log('User is aunthenticated?', this.storage.getItem('authenticated'));
    const isAuth = this.storage.getItem('authenticated');
    if (isAuth === null) {
      console.log('is null');
      this.storage.setItem('authenticated', false);
    }
    return this.storage.getItem('authenticated');
  }

  getUserInfo(): string {
    console.log('User information' + this.storage.getItem('name'));
    return this.storage.getItem('name');
  }

  setUserInfo(name: string) {
    this.storage.getItem('name');
    this.storage.setItem('name', name);
  }
}
