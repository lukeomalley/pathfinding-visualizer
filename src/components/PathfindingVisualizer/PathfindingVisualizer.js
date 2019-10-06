import React, { useState, useEffect } from 'react';

import Node from '../Node';
import { createGrid } from '../../lib/createGrid';

const PathfindingVisualizer = () => {
  const [nodes, setNodes] = useState(createGrid());

  useEffect(() => {
    setNodes(createGrid(20, 50));
  }, []);

  console.log(nodes);

  return (
    <div>
      <h1>Pathfinding Visualizer</h1>
      {nodes.map(node => (
        <Node />
      ))}
    </div>
  );
};

export default PathfindingVisualizer;
