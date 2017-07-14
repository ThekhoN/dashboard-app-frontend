import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_LOADED
} from '../actions/types';

const auth = (state = {authenticated: false, error: '', loading: false}, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {...state, loading: true};
    case AUTH_LOADED:
      return {...state, loading: false};
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
