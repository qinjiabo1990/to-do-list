import React, { useEffect } from "react";


const Form = (props) => {
    const inputTextHandler = (e) => {
        props.input(e.target.value);
    }

    const submitToDoHandler = (e) => {
        e.preventDefault();
        props.setTodosContent([
            ...props.todoContent, { text: props.inputText, completed: false, id: Math.random() * 1000 }
        ]);
        props.input('')
    }

    const statusHandler = (e) => {
        props.setStatus(e.target.value)
    }

    return (
        <form>
            <div className="todo-input">
                <input
                    value={props.inputText}
                    onChange={inputTextHandler}
                    placeholder="Enter New To-Do"
                    type="text"/>
                <button onClick={submitToDoHandler} className="todo-button" type="submit">
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
            <hr />
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All Tasks</option>
                    <option value="completed">Completed Tasks</option>
                    <option value="uncompleted">Uncompleted Tasks</option>
                </select>
            </div>
        </form>
    )
}

export default Form;