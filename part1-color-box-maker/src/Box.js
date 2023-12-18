import React from 'react';

const Box = ({ width, height, color, removeBox }) => {
  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color,
    display: 'inline-block',
    margin: '10px',
    position: 'relative'
  };

  return (
    <div style={boxStyle}>
      <button onClick={removeBox}>X</button>
    </div>
  );
};

export default Box;