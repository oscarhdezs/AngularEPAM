import {AuthenticationActionTypes} from '../shared/enums/authentication-action-types.enum';
import {ActionParent} from '../actions/authenticate.actions';
import {Authenticate} from '../model/authenticate';

const initialState: Authenticate[] = [
  {authenticate: false}
];

export function AuthenticateReducer(state = initialState, action: ActionParent) {
  switch (action.type) {
    case AuthenticationActionTypes.Login:
      return [...state, action.payload];
    case AuthenticationActionTypes.Logout:
      return [...state, action.payload];
    default: return state;
  }
}
