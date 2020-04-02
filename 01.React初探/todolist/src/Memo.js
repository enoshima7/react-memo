/*
    1. Fragment占位符
      其实是个组件
    2. 定义数据
    3. Immutable state不能直接改 使用setState
    4. 父子传值
    5. 单向数据流 子组件无法修改
    6. 视图层框架
    7. 函数式编程
    8. propTypes

    虚拟DOM：
    1. state数据   JSX模板
    2. 数据 + 模板 结合 生成真实DOM
    3. state改变 => 数据 + 模板 结合生成真实DOM 替换 原有的DOM
    缺陷：
    两次都是真实DOM 非常消耗性能 真正需要修改的地方只是局部

    改进：
    2.先生成虚拟DOM就是一个JS对象 来描述真实DOM
    3. 生成真实DOM 显示
    5. state变化 => 生成一个新的虚拟DOM
    6. 比较原始虚拟DOM 和 新的虚拟DOM 的区别 DIFF算法
    7. 替换不同的地方

    优点：
    1. 性能提升
    2. 跨端应用可能 React Native


    DIFF算法
    1. diffrence
    2. setState 是异步的 为了提高性能 多次setState变成一次
    3. 同级比较 从上到下 发现不同 以下全部替换
    4. 循环渲染 根据key找节点

    ref的使用
    setState的第二个参数 回调函数 类似nextTick()

    生命周期函数：
    某一个时刻组件会自动执行的函数
    1. Initialization 
    2. Mounting  只有第一次进入的时候
        componentWillMount 组件即将被挂载到页面的时候自动执行
        render 
        componentDidMount 组件挂载到页面之后自动执行
    3. Updation
        props变化：
            componentWillReceiveProps 比较特殊 如果没有props就不会执行，
                1. 当一个组件从父组件接受了参数props
                2. 第一次子组件被创建不会执行
                3. 之前已经有子组件了的话就会被执行
            shouldComponentUpdate 组件被更新之前自动执行
            componentWillUpdate 组件被更新之前自动执行 在should返回true后执行
            render
            componentDidUpdate
        states变化：
            shouldComponentUpdate 组件被更新之前自动执行
            componentWillUpdate 组件被更新之前自动执行 在should返回true后执行
            render
            componentDidUpdate
    4. Unmount
        componentWillUnmount 组件将被移除的时候自动执行
*/