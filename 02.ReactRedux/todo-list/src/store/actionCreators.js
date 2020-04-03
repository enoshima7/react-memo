import {
  changeInputValue,
  addToDoItem,
  deleteItem,
  initList,
  getInitListType
} from './actionTypes';
import axios from 'axios';
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
// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('http://localhost:4000/data/data.json').then(res => {
//       dispatch(initListAction(res.data));
//       console.log(res.data);
//     });
//   };
// };

export const getInitList = () => {
  return {
    type: getInitListType
  };
};
