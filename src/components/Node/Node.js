import React from 'react';
import './Node.css';

const Node = ({ node, handleMouseDown, handleMouseEnter, handleMouseUp }) => {
  let className = '';
  if (node.isStart) className += 'start';
  if (node.isEnd) className += 'end';
  if (node.isWall) className += 'wall';
  return (
    <div
      id={`node-${node.row}-${node.col}`}
      className={`node ${className}`}
      onMouseDown={() => handleMouseDown(node.row, node.col)}
      onMouseEnter={() => handleMouseEnter(node.row, node.col)}
      onMouseUp={handleMouseUp}
    ></div>
  );
};

export default Node;
