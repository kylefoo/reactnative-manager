import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from './types';

export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({name, phone, shift}) => {
  console.log(name, phone, shift);
  return {
    type: EMPLOYEE_CREATE,
    payload: { name, phone, shift }
  };
};