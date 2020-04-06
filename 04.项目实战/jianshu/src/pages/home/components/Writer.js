import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterHeader, WriterList } from '../style';
class Writer extends PureComponent {
  render() {
    const { writerList } = this.props;
    return (
      <WriterWrapper>
        <WriterHeader>
          <span>推荐作者</span>
          <span>
            <i className="iconfont">&#xe6b5;</i>换一批
          </span>
        </WriterHeader>

        {writerList.map(item => {
          return (
            <WriterList key={item.get('id')}>
              <img className="ListUrl" src={item.get('imgUrl')}></img>
              <div className="ListText">
                <div className="writerName">{item.get('writerName')}</div>
                <div className="desc">{item.get('desc')}</div>
              </div>
              <div className="follow"> + 关注</div>
            </WriterList>
          );
        })}
      </WriterWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    writerList: state.getIn(['home', 'writerList'])
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Writer);
