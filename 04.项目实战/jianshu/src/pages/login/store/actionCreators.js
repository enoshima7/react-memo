import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';
const loginAction = () => {
  return {
    type: constants.LOGIN_TYPE,
    value: true
  };
};
export const login = (ac, pw) => {
  return dispatch => {
    axios.get(`/api/login.json?account=${ac}&password=${pw}`).then(res => {
      if (res.data.data) {
        dispatch(loginAction());
      } else {
        alert('登录失败');
      }
    });
  };
};
export const logout = () => {
  return {
    type:constants.LOGOUT_TYPE
  };
};
