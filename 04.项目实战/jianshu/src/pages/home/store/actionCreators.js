import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';
const initHomeData = data => {
  return {
    type: constants.INIT_DATA,
    data: fromJS(data)
  };
};
const addHomeList = (data, nextPage) => {
  return {
    type: constants.ADD_LIST,
    data: fromJS(data),
    nextPage
  };
};
export const initData = () => {
  return dispatch => {
    axios
      .get('/api/homeList.json')
      .then(res => {
        dispatch(initHomeData(res.data.data));
      })
      .catch(e => {
        console.log(e);
      });
  };
};
export const getMoreList = articlePage => {
  return dispatch => {
    axios.get('/api/articleList.json?page=' + articlePage).then(res => {
      dispatch(addHomeList(res.data.data, articlePage + 1));
    });
  };
};
export const toggleScroll = flag => {
  return {
    type: constants.TOGGLE_SCROLL,
    flag
  };
};
