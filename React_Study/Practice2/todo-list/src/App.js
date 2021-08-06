import React, { Component } from 'react';
import TodoListTemplate from './components/templates/TodoListTemplate';
import Form from './components/form/Form';
class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form/>}>
        Template Complete!
      </TodoListTemplate>
    );
  }
}

export default App;