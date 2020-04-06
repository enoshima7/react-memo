import React from 'react';
import GlobalStyle from './style/index';
import GlobalStyle2 from './statics/iconfont/iconfont';
import Header from './common/header/index';
import store from './store';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail';
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header></Header>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
      <GlobalStyle />
      <GlobalStyle2 />
    </div>
  );
}

export default App;
