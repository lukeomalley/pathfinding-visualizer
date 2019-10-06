import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Node from '../Node';
import { createGrid } from '../../lib/createGrid';

const NodeGrid = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
`;

const RowWrapper = styled.div`
  display: flex;
`;

const PathfindingVisualizer = () => {
  const [nodes, setNodes] = useState(createGrid());

  useEffect(() => {
    setNodes(createGrid(20, 50));
  }, []);

  console.log(nodes);

  return (
    <div>
      <h1>Pathfinding Visualizer</h1>
      <NodeGrid>
        {nodes.map(row => (
          <RowWrapper>
            {row.map(row => (
              <Node />
            ))}
          </RowWrapper>
        ))}
      </NodeGrid>
    </div>
  );
};

export default PathfindingVisualizer;
