import React from 'react';
import styled from 'styled-components';

const NodeWrapper = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid blue;
`;

const Node = () => {
  return <NodeWrapper></NodeWrapper>;
};

export default Node;
