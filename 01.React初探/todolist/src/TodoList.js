/*
    1. Fragment占位符
      其实是个组件
    2. 定义数据
    3. Immutable state不能直接改 使用setState
    4. 父子传值
    5. 单向数据流 子组件无法修改
    6. 视图层框架
    7. 函数式编程
*/
import React, { Component, Fragment } from 'react'; 
import TodoItem from './TodoItem';
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
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
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
    const value = e.target.value;
    this.setState(() => ({ inputValue: value }));
    // this.setState({
    //   inputValue: e.target.value
    // });
  }
  handleButtonClick() {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }));
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
