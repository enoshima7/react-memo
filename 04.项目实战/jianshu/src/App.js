import React from 'react';
import GlobalStyle from './style/index';
import GlobalStyle2 from './statics/iconfont/iconfont';
import Header from './common/header/index';
import store from './store';
import { Provider } from 'react-redux';
function App() {
  return (
    <div>
      <Provider store={store}>
        <Header></Header>
      </Provider>
      <GlobalStyle />
      <GlobalStyle2 />
    </div>
  );
}

export default App;
