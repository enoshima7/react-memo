import React from 'react';
import { Input, Button, List } from 'antd';
// 无状态组件
const TodoListUI = (props)=>{
    return(
        <div>
        <Input
          onChange={props.handleInputChange}
          placeholder="Hello"
          value={props.inputValue}
          style={{ width: '300px', marginRight: '10px' }}
        />
        <Button type="primary" onClick={props.handleButtonClick}>
          提交
        </Button>
        <List
          style={{ marginTop: '10px', width: '50%' }}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                props.handleItemDelete(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    )
}
// class TodoListUI extends Component {
//   render() {
//     return (
//       <div>
//         <Input
//           onChange={this.props.handleInputChange}
//           placeholder="Hello"
//           value={this.props.inputValue}
//           style={{ width: '300px', marginRight: '10px' }}
//         />
//         <Button type="primary" onClick={this.props.handleButtonClick}>
//           提交
//         </Button>
//         <List
//           style={{ marginTop: '10px', width: '50%' }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item
//               onClick={index => {
//                 this.props.handleItemDelete(index);
//               }}
//             >
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     );
//   }
// }

export default TodoListUI;
