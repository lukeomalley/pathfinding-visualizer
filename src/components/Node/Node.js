import React from 'react';
import styled from 'styled-components';

const NodeWrapper = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid blue;
`;

const Node = ({ node, handleMouseDown, handleMouseEnter, handleMouseUp }) => {
  let className = '';
  if (node.isStart) className += 'start';
  if (node.isEnd) className += 'end';
  if (node.isWall) className += 'wall';
  return (
    <NodeWrapper
      id={`node-${node.row}-${node.col}`}
      className={className}
      onMouseDown={() => handleMouseDown(node.row, node.col)}
      onMouseEnter={() => handleMouseEnter(node.row, node.col)}
      onMouseUp={handleMouseUp}
    ></NodeWrapper>
  );
};

export default Node;
