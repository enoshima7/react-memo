import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  login: false
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.LOGIN_TYPE:
      return state.set('login', true);
    case constants.LOGOUT_TYPE:
      return state.set('login', false);
    default:
      break;
  }
  return state;
};
