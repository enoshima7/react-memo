import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Comtent } from './style';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
class Detail extends PureComponent {
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Comtent dangerouslySetInnerHTML={{ __html: content }}></Comtent>
      </DetailWrapper>
    );
  }
  componentDidMount() {
    this.props.getDetailsData(this.props.match.params.id);
  }
}
const mapStateToProps = state => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getDetailsData(id) {
      dispatch(actionCreators.getDetailsData(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));
