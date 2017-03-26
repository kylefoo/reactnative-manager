import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

//States
export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
});