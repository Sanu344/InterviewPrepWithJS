let grid = [
  [1, 0, 0, 1, 0],
  [1, 0, 0, 1, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1],
];
// let visited = new Set();
// gridIslandtravel(grid, 4, 2, visited);
console.log(islandBiggest(grid));

function islandBiggest(grid) {
  let visited = new Set();
  let max = 0;
  let min = null;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let temp = i + "," + j;
      if (!visited.has(temp) && grid[i][j] == 1) {
        let islandSize = { count: 0 };
        gridIslandtravel(grid, i, j, islandSize, visited);
        if (max < islandSize.count) max = islandSize.count;
        if (min) {
          if (min > islandSize.count) min = islandSize.count;
        } else {
          min = islandSize.count;
        }
      }
    }
  }
  return { Max: max, Min: min };
}

function gridIslandtravel(
  grid,
  row = 0,
  col = 0,
  islandSize,
  visited = new Set()
) {
  let temp = row + "," + col;
  if (!visited.has(temp) && grid[row][col] === 1) {
    visited.add(temp);
    islandSize.count += 1;
    const maxCol = grid[0].length - 1;
    const maxRow = grid.length - 1;
    if (row > 0) {
      if (grid[row - 1][col])
        gridIslandtravel(grid, row - 1, col, islandSize, visited);
    }
    if (col < maxCol) {
      if (grid[row][col + 1])
        gridIslandtravel(grid, row, col + 1, islandSize, visited);
    }
    if (row < maxRow) {
      if (grid[row + 1][col])
        gridIslandtravel(grid, row + 1, col, islandSize, visited);
    }
    if (col > 0) {
      if (grid[row][col - 1])
        gridIslandtravel(grid, row, col - 1, islandSize, visited);
    }
  }
}
