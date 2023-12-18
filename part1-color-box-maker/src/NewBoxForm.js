import React, { useState } from 'react';

const NewBoxForm = ({ addBox }) => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ width, height, color });
    setWidth('');
    setHeight('');
    setColor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Width:
        <input type="text" value={width} onChange={(e) => setWidth(e.target.value)} />
      </label>
      <label>
        Height:
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
      </label>
      <label>
        Color:
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>
      <button type="submit">Add Box</button>
    </form>
  );
};

export default NewBoxForm;