import React, { useState } from 'react';

const Todo = (props) => {
    const deleteHandle = () => {
        props.setTodos(props.todos.filter(el => el.id !== props.todo.id));
        // console.log(props.todos.id)
    }

    const completeHandler = () => {
        props.setTodos(props.todos.map((item) => {
            if (item.id === props.todo.id) {
                return {
                    ...item, completed: !item.completed

                }
            }
            return item;
        }))

    }
    
    return (
        <div className="todo">
            {/* Check props status, if completed is true then add css completed */}
            <li className={`todo-item ${props.todo.completed ? "completed" : ''}`}>
                {props.text}
            </li>

            <button onClick={completeHandler} className='complete-btn'><i className="fas fa-check"></i></button>

            <button onClick={deleteHandle} className='trash-btn'><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;