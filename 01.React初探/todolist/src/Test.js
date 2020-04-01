import React, { Component } from 'react';
class Test extends Component {
  render() {
    // 父组件的render函数重新执行 子组件的render也要重新执行
    const { content } = this.props;
    return <div>{content}</div>;
  }
}
export default Test;
