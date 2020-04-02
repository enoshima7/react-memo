import { createStore } from 'redux';
import reducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
/*
    1. store是唯一的
    2. 只有store能够改变自己的内容 是store拿到reducer返回的新state自己更新的
    3. reducer必须是纯函数 
        给定固定的输入，就产生固定的输出，一一对应，没有副作用
    4. 核心API
        createStore
        store.dispatch
        store.getState
        store.subscribe
*/ 