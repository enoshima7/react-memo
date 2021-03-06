# 项目笔记

1. 安装 `styled-components` 管理`css`文件
   - 把`css`变成`js`
2. 使用`reset.css` 结合做 `globalstyle`
3. `styled-components`的用法
   - `attrs`
   - `&.xxx`
   - `&::placeholder`
   - `url`引入图片用`import`加`${}`语法
4. `iconfont`使用
   - 下载到本地
   - 变成`js` 全局引入
5. 搜索栏动画
   - `react-transition-group`库
   - `CSSTransition`
6. 改造成`react-redux`
   - 引入`redux` 和 `react-redux`
   - `index.js`中用`Provider` `store`
   - 用`connect`连接组件
   - 把变量放在`mapStateToProps` 把方法放在`mapDispatchToProps
   - 写`store` 和 `reducer` 熟悉整个流程
   - 改造成无状态组件
7. 分离`reducer`(`combineReducers`)
   - 各自版块建立自己的`reducer`
   - 在主`reducer`引入使用`combineReducers`
8. 分离`actionCreater` 和 `actionTypes`常量
   - `actionCreater`放在`store`的`index`中导出
9. `immutable.js`
   - 安装`immutable.js`
   - `fromJS`方法
   - 用`get`才能获取属性
   - 用`state.set`改属性 会把以前的和改变的结合 返回一个新的`state`
   - 用state.merge可以返回多个属性
10. 使用 redux-immutable
    - 安装 redux-immutable
    - 改全局的 reducer
    - getIn 方法
11. 搜索弹出烂
    - 利用绝对定位
    - 写 getListArea 方法 返回 JSX 对象 当 focued 存在就返回 否则就返回 null
12. 使用redux-thunk做异步请求操作
    - 在全局store使用中间件thunk
    - actionCreators可以返回方法
    - 在public文件夹做假数据
    - 接口得到的数据也要变成immutable

