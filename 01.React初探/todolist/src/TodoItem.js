import React, { Component } from 'react';
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.deleteLi = this.deleteLi.bind(this);
  }
  render() {
    const { li } = this.props;
    return <div onClick={this.deleteLi}>{li}</div>;
  }
  deleteLi() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}
export default TodoItem;
