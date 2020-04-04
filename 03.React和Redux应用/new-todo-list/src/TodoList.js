import React, { Component } from 'react';
import { connect } from 'react-redux';

// UI组件
const TodoList = props => {
  const { inputValue, changeInputValue, addListItem, list, deleteItem } = props;
  return (
    <div>
      <input onChange={changeInputValue} value={inputValue} />
      <button onClick={addListItem}>提交</button>
      <ul>
        {list.map((v, i) => {
          return (
            <li onClick={deleteItem(i)} key={i}>
              {v}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      };
      dispatch(action);
    },
    addListItem() {
      const action = {
        type: 'add_list_item'
      };
      dispatch(action);
    },
    deleteItem(index) {
      return () => {
        const action = {
          type: 'delete_list_item',
          index
        };
        dispatch(action);
      };
    }
  };
};
// 暴露出容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
