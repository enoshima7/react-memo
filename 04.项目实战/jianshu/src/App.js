import React from 'react';
import GlobalStyle from './style/index';
import GlobalStyle2 from './statics/iconfont/iconfont';
import Header from './common/header/index';
import store from './store';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header></Header>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/write" exact component={Write}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
      <GlobalStyle />
      <GlobalStyle2 />
    </div>
  );
}

export default App;
