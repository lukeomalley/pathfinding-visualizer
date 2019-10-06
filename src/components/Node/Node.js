import React from 'react';
import styled from 'styled-components';

const NodeWrapper = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid blue;
`;

const Node = ({ node }) => {
  let className = '';
  if (node.isStart) className += 'start';
  if (node.isEnd) className += 'end';
  return <NodeWrapper className={className}></NodeWrapper>;
};

export default Node;
