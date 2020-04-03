import React, { Component } from 'react';

import store from './store/index';
import 'antd/dist/antd.css';
import {
  getInputChangeAction,
  getaddToDoItemAction,
  getdeleteItemAction,
  getInitList,
  initListAction,
  getTodoList
} from './store/actionCreators';
import TodoListUI from './TodoListUI';
import axios from 'axios';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.haddleStoreChange = this.haddleStoreChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.haddleStoreChange);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleButtonClick={this.handleButtonClick}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }
  componentDidMount() {
    // axios.get('http://localhost:4000/data/data.json').then(res => {
    //   store.dispatch(initListAction(res.data));
    //   console.log(res.data);
    // });

    // const action = getTodoList();
    // store.dispatch(action)

    const action = getInitList();
    store.dispatch(action);
    console.log(action);
  }
  handleInputChange(e) {
    store.dispatch(getInputChangeAction(e.target.value));
  }
  haddleStoreChange() {
    this.setState(store.getState());
  }
  handleButtonClick() {
    store.dispatch(getaddToDoItemAction());
  }
  handleItemDelete(index) {
    store.dispatch(getdeleteItemAction(index));
  }
}

export default TodoList;
