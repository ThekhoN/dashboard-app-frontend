import {combineReducers} from 'redux';
import auth from './auth';
import userData from './userData';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  auth,
  userData,
  form: formReducer
});

export default rootReducer;
