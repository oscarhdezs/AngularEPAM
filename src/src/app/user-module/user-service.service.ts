import { Inject, Injectable } from '@angular/core';
import {APP_STORAGE} from '../core/core.module';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(@Inject(APP_STORAGE) private  storage) {
  }




  saveUseUserData(user: any) {
    this.storage.setItem('user', user);
  }
}


