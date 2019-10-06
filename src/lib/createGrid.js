export const createGrid = (row, column) => {
  const nodes = [];
  for (let i = 0; i < row; i++) {
    const currentRow = [];
    for (let j = 0; j < column; j++) {
      currentRow.push([]);
    }
    nodes.push(currentRow);
  }
  return nodes;
};
