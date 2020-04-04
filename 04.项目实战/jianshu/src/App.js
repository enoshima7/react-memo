import React from 'react';
import GlobalStyle from './style/index';
import Header from './common/header/index'

function App() {
  return (
    <div>
      <div className="App">
        <Header></Header>
      </div>
      <GlobalStyle />
    </div>
  );
}

export default App;
