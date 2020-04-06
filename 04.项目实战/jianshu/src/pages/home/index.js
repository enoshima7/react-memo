import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import { connect } from 'react-redux';
import Topic from './components/Topics';
import Recommend from './components/Recommend';
import List from './components/List';
import Writer from './components/Writer';
import { actionCreators } from './store';
class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  render() {
    const { bannerUrl, showScroll } = this.props;
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img className="bannerImg" alt="" src={bannerUrl} />
            <Topic></Topic>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
            <Writer></Writer>
          </HomeRight>
        </HomeWrapper>
        {showScroll ? (
          <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
        ) : null}
      </div>
    );
  }
  componentDidMount() {
    this.props.initData();
    this.bindEvents();
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollShow);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollShow);
  }
}
const mapStateToProps = state => {
  return {
    bannerUrl: state.getIn(['home', 'bannerUrl']),
    showScroll: state.getIn(['home', 'showScroll'])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    initData() {
      dispatch(actionCreators.initData());
    },
    changeScrollShow() {
      if (document.documentElement.scrollTop > 400) {
        dispatch(actionCreators.toggleScroll(true));
      } else {
        dispatch(actionCreators.toggleScroll(false));
      }
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
