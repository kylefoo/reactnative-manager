import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

//States
export default combineReducers({
  auth: AuthReducer
});