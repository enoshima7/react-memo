# 项目笔记
1. 安装 styled-components 管理css文件 scoped
    - 把css变成js
2. 使用reset.css globalstyle
3. styled-components的用法
    - attrs
    - &.xxx
    - &::placeholder
    - url引入图片用import加${}语法
4. iconfont使用
    - 下载到本地
    - 变成js 全局引入
5. 搜索栏动画
    - react-transition-group库
    - CSSTransition
6. 改造成react-redux
    - 引入redux 和 react-redux
    - index.js中用Provider store
    - 用connect连接组件
    - 把变量放在mapStateToProps 把方法放在mapDispatchToProps
    - 写store 和 reducer 熟悉整个流程
    - 改造成无状态组件
7. 分离reducer(combineReducers)
    - 各自版块建立自己的reducer
    - 在主reducer引入使用combineReducers
8. 分离actionCreater 和 actionTypes常量
    - actionCreater放在store的index中导出
9. immutable.js
    - 安装immutable.js
    - fromJS方法
    - 用get才能获取属性
    - 用state.set改属性 会把以前的和改变的结合 返回一个新的state