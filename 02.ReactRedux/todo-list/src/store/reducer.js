import {
  changeInputValue,
  addToDoItem,
  deleteItem,
  initList
} from './actionTypes';

const defaultState = {
  inputValue: '请添加',
  list: []
};

// reducer可以接受state 但不能修改state 只能拷贝一份出来返回出去
export default (state = defaultState, action) => {
  if (action.type === changeInputValue) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === addToDoItem) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === deleteItem) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.value, 1);
    return newState;
  }
  if (action.type === initList) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state;
};
