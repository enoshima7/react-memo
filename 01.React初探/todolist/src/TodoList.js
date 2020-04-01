import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
// import Test from './Test';
import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'hello!!!',
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.deleteLi = this.deleteLi.bind(this);
  }

  render() {
    return (
      <Fragment>
        {/* 这么来写注释 */}
        <div>
          <label htmlFor="insertArea">输入：</label>
          <input
            ref={input => {
              this.input = input;
            }}
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul
          ref={ul => {
            this.ul = ul;
          }}
        >
          {this.getTodoItem()}
        </ul>
        {/* <Test content={this.state.inputValue}/> */}
      </Fragment>
    );
  }
  getTodoItem() {
    return this.state.list.map((li, index) => {
      return (
        <TodoItem
          li={li}
          key={index}
          index={index}
          deleteItem={this.deleteLi}
        />
        // <li
        //   onClick={this.deleteLi.bind(this, index)}
        //   key={index}
        //   // dangerouslySetInnerHTML={{ __html: li }}
        // >
        //   {li}
        // </li>
      );
    });
  }
  handleInputChange(e) {
    // const value = e.target.value;
    const value = this.input.value;
    this.setState(() => ({ inputValue: value }));
    // this.setState({
    //   inputValue: e.target.value
    // });
  }
  handleButtonClick() {
    this.setState(
      prevState => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }),
      () => {
        console.log(this.ul.querySelectorAll('div').length);
      }
    );
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // });
  }
  deleteLi(index) {
    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {
        list
      };
    });
    // this.setState({
    //   list
    // });
  }
}
export default TodoList;
