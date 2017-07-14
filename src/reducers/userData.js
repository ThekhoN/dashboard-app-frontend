import {
  GET_USER_DATA,
  LOADING_USER_DATA,
  LOADED_USER_DATA,
  LOADED_FIRST_USER_DATA,
  GET_USER_DATA_ERROR
} from '../actions/types';

export const initialStateEntries = {
  firstLoaded: false,
  loaded: false,
  data: [],
  error: ''
};

const userData = (state = initialStateEntries, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {...state, data: action.payload};
    case GET_USER_DATA_ERROR:
      return {...state, error: action.payload};
    case LOADING_USER_DATA:
      return {...state, loaded: false};
    case LOADED_USER_DATA:
      return {...state, loaded: true};
    case LOADED_FIRST_USER_DATA:
      return {...state, firstLoaded: true};
    default:
      return state;
  }
};

export default userData;
