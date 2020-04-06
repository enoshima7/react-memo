import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';
const getDetails = data => {
  return {
    type: constants.GET_DETAIL,
    data: fromJS(data)
  };
};
export const getDetailsData = id => {
  return dispatch => {
    axios.get('/api/detailsData.json?id=' + id).then(res => {
      dispatch(getDetails(res.data.data));
    });
  };
};
