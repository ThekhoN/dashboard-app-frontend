import {
  GET_USER_DATA,
  LOADING_USER_DATA,
  LOADED_USER_DATA,
  GET_USER_DATA_ERROR
} from '../actions/types';

export const initialStateEntries = {
  status: '',
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
      return {...state, status: action.payload};
    case LOADED_USER_DATA:
      return {...state, status: action.payload};
    case 'ADDING_USER_DATA':
      return state;
    default:
      return state;
  }
};

export default userData;
