let grid = [
  [1, 0, 0, 1, 0],
  [1, 0, 0, 1, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1],
];
// let visited = new Set();
// gridIslandtravel(grid, 4, 2, visited);
console.log(islandCounter(grid));

function islandCounter(grid) {
  let visited = new Set();
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let temp = i + "," + j;
      if (!visited.has(temp) && grid[i][j] == 1) {
        gridIslandtravel(grid, i, j, visited);
        count++;
      }
    }
  }
  return count;
}

function gridIslandtravel(grid, row = 0, col = 0, visited = new Set()) {
  let temp = row + "," + col;
  if (!visited.has(temp) && grid[row][col] === 1) {
    visited.add(temp);
    const maxCol = grid[0].length - 1;
    const maxRow = grid.length - 1;
    if (row > 0) {
      if (grid[row - 1][col]) gridIslandtravel(grid, row - 1, col, visited);
    }
    if (col < maxCol) {
      if (grid[row][col + 1]) gridIslandtravel(grid, row, col + 1, visited);
    }
    if (row < maxRow) {
      if (grid[row + 1][col]) gridIslandtravel(grid, row + 1, col, visited);
    }
    if (col > 0) {
      if (grid[row][col - 1]) gridIslandtravel(grid, row, col - 1, visited);
    }
  }
}
