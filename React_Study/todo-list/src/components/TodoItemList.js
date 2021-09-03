import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  shouldComponentUpdate(nextProps, nextState){
    return this.props.todos !== nextProps.todos;
  }
  // 업데이트에 영향을 끼치는 조건을 리턴하는 것 구현되지 않을 경우 언제나 True를 반환한다. 
  // 이 경우에는 todos 값이 바뀔 경우에 리렌더링 해야 하니까 this.props.todos와 nextProps.todos를 비교하여 다를때만 리렌더링하게 설정하면 된다. 
  
  render() {
    const { todos, onToggle, onRemove } = this.props;
    // todos: todo 객체들이 들어있는 배열
    // onToggle: 체크박스를 키고 끄는 함수
    // onRemove: 아이템을 삭제시키는 함수
    const todoList = todos.map(
        ({id, text, checked}) => (
            <TodoItem
              id={id}
              text={text}
              checked={checked}
              onToggle={onToggle}
              onRemove={onRemove}
              key={id}
            />
          )
    );
    return (
        <div>
          {todoList}    
        </div>
      );
  }
}

export default TodoItemList;