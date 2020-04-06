import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  title: '',
  content: ''
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_DETAIL:
      return state.merge({
        title: action.data.get('title'),
        content: action.data.get('content')
      });
    default:
      break;
  }
  return state;
};
