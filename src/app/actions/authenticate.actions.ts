import {Action} from '@ngrx/store';
import {AuthenticationActionTypes} from '../shared/enums/authentication-action-types.enum';

export class ActionParent implements Action {
  type: any;
  payload: any;
}

export class AuthenticationLogin implements ActionParent {
  type =  AuthenticationActionTypes.Login;
  constructor(public payload: any) {}
}

export class AuthenticationLogout implements ActionParent {
  type =  AuthenticationActionTypes.Logout;
  constructor(public payload: any) {}
}
