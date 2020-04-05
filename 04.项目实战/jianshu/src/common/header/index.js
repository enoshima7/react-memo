import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Btn
} from './style';

const Header = props => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe655;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition timeout={200} in={props.focused} classNames="slide">
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleSearchFocus}
              onBlur={props.handleSearchBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>
            &#xe654;
          </i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Btn className="writting">
          <i className="iconfont">&#xe708;</i>写文章
        </Btn>
        <Btn className="reg">注册</Btn>
      </Addition>
    </HeaderWrapper>
  );
};
const mapStateToProps = state => {
  return {
    focused: state.focused
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleSearchFocus() {
      const action = {
        type: 'searchFocus'
      };
      dispatch(action);
    },
    handleSearchBlur() {
      const action = {
        type: 'searchBlur'
      };
      dispatch(action);
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
