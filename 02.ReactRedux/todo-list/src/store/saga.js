import { takeEvery, put } from 'redux-saga/effects';
import { getInitListType } from './actionTypes';
import { initListAction } from './actionCreators';
import axios from 'axios';

function* getInitList() {
  try {
    const res = yield axios.get('http://localhost:4000/data/data.json');
    const action = initListAction(res.data);
    yield put(action);
  } catch (error) {
    console.log('data.json请求失败');
  }
}

function* mySaga() {
  yield takeEvery(getInitListType, getInitList);
}

export default mySaga;
