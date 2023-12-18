import React from 'react';

const Todo = ({ todo, onRemoveTodo }) => {
  return (
    <div>
      {todo.task}
      <button onClick={() => onRemoveTodo(todo.id)}>X</button>
    </div>
  );
};

export default Todo;