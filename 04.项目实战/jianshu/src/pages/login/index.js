import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button } from './style';
class Login extends Component {
  render() {
    const { handleLogin, login } = this.props;
    if (!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="账号"
              ref={input => {
                this.account = input;
              }}
            />
            <Input
              placeholder="密码"
              type="password"
              ref={input => {
                this.password = input;
              }}
            />
            <Button
              onClick={() => {
                handleLogin(this.account, this.password);
              }}
            >
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/"></Redirect>;
    }
  }
}
const mapStateToProps = state => {
  return {
    login: state.getIn(['login', 'login'])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleLogin(accountEl, passwordEl) {
      dispatch(actionCreators.login(accountEl.value, passwordEl.value));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
