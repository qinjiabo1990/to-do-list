import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  console.log(props.output)
  return (<div className="todo-container">
  <ul className="todo-list">
    {props.output.map((e) => (
      <Todo 
      setTodos={props.setTodos} 
      todos={props.output}
      key={e.id} 
      todo={e}
      text={e.text}
      />
    )
    )}
  </ul>
</div>)
}
  
export default TodoList;