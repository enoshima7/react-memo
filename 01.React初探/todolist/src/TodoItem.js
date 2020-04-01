import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
  constructor(props) {
    super(props);
    // 当state或者props改变 render函数就会重新执行
    this.deleteLi = this.deleteLi.bind(this);
  }
  render() {
    const { li, test } = this.props;
    // return React.createElement('div', {}, 'item');
    // JSX => JS虚拟DOM => 真实DOM
    return (
      <div onClick={this.deleteLi}>
        {li} - {test}
      </div>
    );
  }
  deleteLi() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}
TodoItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
  test: PropTypes.string.isRequired
};
TodoItem.defaultProps = {
  test: 'hello'
};
export default TodoItem;
