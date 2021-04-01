import React, { useState, useEffect } from 'react';
import './App.css';
import { } from "module";
import Form from './components/Form';
import TodoList from './components/TodoList';
import Footer from './components/Footer'

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //////////////////////////////////////////////////////////////////////////////
  //RUN ONCE when the app start
  useEffect(()=>{
    getLocalTodos();
  },[]);

  useEffect(() => {
    filterHandler();
    saveLocoalTodos();
  }, [todos, status]);
  //////////////////////////////////////////////////////////////////////////////

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  const saveLocoalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
    //console.log('save')
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
    //console.log('get')
  }
  //////////////////////////////////////////////////////////////////////////////

  return (
    <div className="App">
      <header>
        <h1>Your Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todoContent={todos}
        setTodosContent={setTodos}
        input={setInputText}
        setStatus={setStatus}

      />
      <TodoList
        setTodos={setTodos}
        output={todos}
        filteredTodos={filteredTodos}
      />
      <Footer />
    </div>
    
  );
}

export default App;
