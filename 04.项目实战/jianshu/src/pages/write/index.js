import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button } from './style';
class Write extends Component {
  render() {
    const { handleLogin, login } = this.props;
    if (login) {
      return <div>写文章</div>;
    } else {
      return <Redirect to="/login"></Redirect>;
    }
  }
}
const mapStateToProps = state => {
  return {
    login: state.getIn(['login', 'login'])
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Write);
