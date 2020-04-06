import styled from 'styled-components';
export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  height: 300px;
`;
export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  .bannerImg {
    width: 625px;
    height: 417px;
  }
`;
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  margin-left: 18px;
  margin-bottom: 18px;
  float: left;
  background-color: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  color: #000;
  padding-right: 10px;
  .topicPic {
    width: 32px;
    height: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`;
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .listPic {
    width: 150px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`;
export const ListInfo = styled.div`
  width: 458px;
  float: left;
  .title {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 18px;
    color: #999999;
  }
`;
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;
export const RecommendItem = styled.div`
  margin: 0 0 6px;
  width: 280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`;
export const WriterWrapper = styled.div`
  width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const WriterHeader = styled.div`
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #969696;
  font-size: 14px;
`;
export const WriterList = styled.div`
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0 0 0;
  .ListUrl {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    border: 1px solid #ddd;
  }
  .ListText {
    padding-left: 15px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 48px;
    .writerName {
      font-size: 14px;
      color: #333333;
    }
    .desc {
      font-size: 12px;
      color: #969696;
    }
  }
  .follow {
    font-size: 13px;
    color: #42c02e;
  }
`;
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  margin: 30px 0;
  cursor: pointer;
`;
export const BackTop = styled.div`
  position: fixed;
  right:100px;
  bottom:100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align:center;
  border:1px solid #ccc;
  font-size:14px;
`;
