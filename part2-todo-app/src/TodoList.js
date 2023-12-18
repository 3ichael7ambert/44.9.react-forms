import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, id: todos.length + 1 }]);
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      <NewTodoForm onAddTodo={addTodo} />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onRemoveTodo={removeTodo} />
      ))}
    </div>
  );
};

export default TodoList;