import React, { useState } from 'react';

const NewTodoForm = ({ onAddTodo }) => {
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo({ task });
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleInputChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;