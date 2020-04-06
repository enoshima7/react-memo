import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  bannerUrl: '',
  articlePage: 1,
  showScroll: false
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.INIT_DATA:
      return state.merge({
        topicList: action.data.get('topicList'),
        articleList: action.data.get('articleList'),
        recommendList: action.data.get('recommendList'),
        writerList: action.data.get('writerList'),
        bannerUrl: action.data.get('bannerUrl')
      });
    case constants.ADD_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.data),
        articlePage: action.nextPage
      });
    case constants.TOGGLE_SCROLL:
      return state.set('showScroll', action.flag);
    default:
      break;
  }
  return state;
};
