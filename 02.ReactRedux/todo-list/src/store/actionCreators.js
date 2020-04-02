import { changeInputValue, addToDoItem, deleteItem,initList } from './actionTypes';
export const getInputChangeAction = value => {
  return {
    type: changeInputValue,
    value
  };
};
export const getaddToDoItemAction = () => {
  return {
    type: addToDoItem
  };
};
export const getdeleteItemAction = value => {
  return {
    type: deleteItem,
    value
  };
};
export const initListAction = data => {
  return {
    type: initList,
    data
  };
};
