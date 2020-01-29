import {Inject, Injectable} from '@angular/core';
import {APP_STORAGE} from '../../core/core.module';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Courses} from '../../model/courses';

@Injectable({
  providedIn: 'root'
})
export class  AuthorizationService {

  public token: string;
  public userInfo: string;
  public courses: Courses[];

  constructor(@Inject(APP_STORAGE) private  storage,
              private httpClient: HttpClient) { }

  login(login: string, password: string) {
    return this.httpClient.post<string>('http://localhost:3004/auth/login', {login, password })
      .pipe(
        switchMap(token => {
          this.token = token;
          this.storage.setItem('authenticated', true);
          return this.httpClient.get<any>('http://localhost:3004/courses');
        })
      );

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

  getToken(): string {
    return this.token['token'];
  }

  getUserInfo(): Observable<string> {
    return this.httpClient.post<string>('http://localhost:3004/auth/userinfo', { token : this.getToken()});
  }
}
