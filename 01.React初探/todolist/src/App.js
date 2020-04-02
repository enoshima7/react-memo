import React, { Component } from 'react';
import TodoList from './TodoList';
import Toggle from './Toggle';
import ToggleAdd from './ToggleAdd';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World111
        <TodoList />
        <Toggle />
        <div>
          <ToggleAdd />
        </div>
      </div>
    );
  }
}

export default App;
