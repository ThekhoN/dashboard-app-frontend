import {combineReducers} from 'redux';
import auth from './auth';
import userData from './userData';
import adminData from './adminData';
import selectedUser from './selectedUser';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  auth,
  userData,
  adminData,
  selectedUser,
  form: formReducer
});

export default rootReducer;
