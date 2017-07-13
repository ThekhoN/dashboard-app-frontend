import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../actions/types';

const auth = (state = {authenticated: false, error: ''}, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {...state, error: '', authenticated: true};
    case UNAUTH_USER:
      return {...state, error: '', authenticated: false};
    case AUTH_ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
};

export default auth;
