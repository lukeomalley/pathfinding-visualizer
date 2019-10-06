import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Node from '../Node';
import { createGrid } from '../../lib/createGrid';

const NodeGrid = styled.div`
  margin: 0 auto;
  width: 70vw;

  .start {
    background: green;
  }

  .end {
    background: red;
  }
`;

const RowWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
`;

const PathfindingVisualizer = () => {
  const [rows, setRows] = useState(createGrid());

  useEffect(() => {
    setRows(createGrid(20, 50));
  }, []);

  return (
    <div>
      <h1>Pathfinding Visualizer</h1>
      <NodeGrid>
        {rows.map((row, index) => (
          <RowWrapper key={index}>
            {row.map((node, index) => (
              <Node key={index} node={node} />
            ))}
          </RowWrapper>
        ))}
      </NodeGrid>
    </div>
  );
};

export default PathfindingVisualizer;
