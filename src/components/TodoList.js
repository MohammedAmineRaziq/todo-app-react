import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1><ul>
  <li>
    <input type="checkbox" />
    <div>T</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>O</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>D</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>A</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>Y</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>'S</div>
  </li>
  <li>
    <input type="checkbox" />
    <div> </div>
  </li>
  <li>
    <input type="checkbox" />
    <div>L</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>I</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>S</div>
  </li>
  <li>
    <input type="checkbox" />
    <div>T</div>
  </li>
</ul></h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;