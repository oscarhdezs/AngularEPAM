import {Injectable} from '@angular/core';
import {Actions, ofType} from '@ngrx/effects';
import {AuthorizationService} from '../service/authorization/authorization.service';
import {Router} from '@angular/router';
import {AuthenticationLogin} from '../actions/authenticate.actions';
import {AuthenticationActionTypes} from '../shared/enums/authentication-action-types.enum';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthEffect {
  login$ = this.actions.pipe(
    ofType<AuthenticationLogin>(AuthenticationActionTypes.Login),
    // tap(action => localStorage.setItem())
  );

  constructor(private actions: Actions,
              private authService: AuthorizationService,
              private router: Router) {}
}
