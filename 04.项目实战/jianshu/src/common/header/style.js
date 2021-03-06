import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`;
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;
export const Nav = styled.div`
  box-sizing: border-box;
  padding-right: 70px;
  width: 960px;
  height: 100%;
  margin: 0 auto;
`;
export const NavItem = styled.div`
  color: #333;
  line-height: 56px;
  padding: 0 15px;
  font-weight: 17px;
  .iconfont {
    font-size: 28px;
  }
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background-color: #777;
      color: #fff;
    }
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 30px;
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  background-color: #eee;
  font-size: 14px;
  color: #666;
  /* transition: all 0.3s ease; */

  &.slide-enter {
    transition: all ease 0.2s;
    width: 160px;
  }
  &.slide-enter-active {
    width: 260px;
  }
  &.slide-exit {
    transition: all ease 0.2s;
  }
  &.slide-exit.active {
    width: 160px;
  }
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 200px;
  }
`;
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Btn = styled.div`
  font-size: 14px;
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background-color: #ec6149;
  }
  .iconfont {
    margin-right: 6px;
  }
`;
export const SearchInfo = styled.div`
  z-index: 1;
  background-color: #fff;
  position: absolute;
  top: 56px;
  left: 0;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    font-size: 15px;
    margin-right: 2px;
    position: relative;
    top: 1px;
    display: block;
    float: left;
    transition: all 1s ease;
    transform-origin: center;
  }
`;
export const SearchInfoList = styled.span`
  overflow: hidden;
`;
export const SearchInfoItem = styled.a`
  padding: 0 5px;
  font-size: 12px;
  line-height: 20px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
`;
