import React from 'react';
import styled from 'styled-components';

const NodeWrapper = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid blue;
`;

const Node = () => {
  return <NodeWrapper></NodeWrapper>;
};

export default Node;
