import React, { useState } from 'react';
import styled from 'styled-components';

import Node from '../Node';
import { createInitialGrid, getNewGridWithWallToggled } from '../../lib/createGrid';
import { dijkstra, getNodesInShortestPathOrder } from '../../lib/dijkstra';

const PathfindingVisualizer = () => {
  const START_NODE_ROW = 10;
  const START_NODE_COL = 5;
  const END_NODE_ROW = 10;
  const END_NODE_COL = 45;

  const [grid, setGrid] = useState(createInitialGrid());
  const [mouseIsPressed, setMouseIsPressed] = useState(false);

  const handleMouseDown = (row, col) => {
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
    setMouseIsPressed(true);
  };

  const handleMouseEnter = (row, col) => {
    if (!mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = () => {
    setMouseIsPressed(false);
  };

  const animateShortestPath = nodesInShortestPathOrder => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className = 'nose-shortest-path';
      }, 50 * i);
    }
  };

  const animateDijkstra = (visitedNodesInOrder, nodesInShortestPathOrder) => {
    for (let i = 0; i < visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => animateShortestPath(nodesInShortestPathOrder), 10 * 1);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className = 'node-visited';
      }, 10 * i);
    }
  };

  const visualizeDijkstra = () => {
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const endNode = grid[END_NODE_ROW][END_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode, endNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(endNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  };

  return (
    <div>
      <h1>Pathfinding Visualizer</h1>
      <button onClick={visualizeDijkstra}></button>
      <NodeGrid>
        {grid.map((row, index) => (
          <RowWrapper key={index}>
            {row.map((node, index) => (
              <Node
                key={index}
                node={node}
                handleMouseDown={handleMouseDown}
                handleMouseEnter={handleMouseEnter}
                handleMouseUp={handleMouseUp}
              />
            ))}
          </RowWrapper>
        ))}
      </NodeGrid>
    </div>
  );
};

const NodeGrid = styled.div`
  margin: 0 auto;
  width: 70vw;

  .start {
    background: green;
  }

  .end {
    background: red;
  }

  .wall {
    background: blue;
  }

  .node-visited {
    animation-name: visitedAnimation;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }

  @keyframes visitedAnimation {
    0% {
      transform: scale(0.3);
      background-color: rgba(0, 0, 66, 0.75);
      border-radius: 100%;
    }

    50% {
      background-color: rgba(17, 104, 217, 0.75);
    }

    75% {
      transform: scale(1.2);
      background-color: rgba(0, 217, 159, 0.75);
    }

    100% {
      transform: scale(1);
      background-color: rgba(0, 190, 218, 0.75);
    }
  }

  .node-shortest-path {
    animation-name: shortestPath;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-play-state: running;
  }

  @keyframes shortestPath {
    0% {
      transform: scale(0.6);
      background-color: rgb(255, 254, 106);
    }

    50% {
      transform: scale(1.2);
      background-color: rgb(255, 254, 106);
    }

    100% {
      transform: scale(1);
      background-color: rgb(255, 254, 106);
    }
  }
`;

const RowWrapper = styled.div`
  display: flex;
`;

export default PathfindingVisualizer;
