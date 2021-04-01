import React, {useState} from 'react';
import './App.css';
import { } from "module";
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Your Todo List</h1>
      </header>
      <Form inputText={inputText} todoContent={todos} setTodosContent={setTodos} input={setInputText}/>
      <TodoList setTodos={setTodos} output={todos}/>
    </div>
  );
}

export default App;
