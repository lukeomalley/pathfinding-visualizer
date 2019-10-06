import React, { useState } from 'react';
import styled from 'styled-components';

import Node from '../Node';
import { createInitialGrid } from '../../lib/createGrid';

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
  display: flex;
`;

const PathfindingVisualizer = () => {
  const [grid, setGrid] = useState(createInitialGrid());

  return (
    <div>
      <h1>Pathfinding Visualizer</h1>
      <NodeGrid>
        {grid.map((row, index) => (
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
