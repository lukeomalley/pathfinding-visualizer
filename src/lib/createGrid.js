export const createGrid = (row, column) => {
  const nodes = [];
  for (let i = 0; i < row; i++) {
    const currentRow = [];
    for (let j = 0; j < column; j++) {
      const currentNode = {
        row: i,
        col: j,
        isStart: i === 10 && j === 5,
        isEnd: i === 10 && j === 45,
      };
      currentRow.push(currentNode);
    }
    nodes.push(currentRow);
  }
  return nodes;
};
