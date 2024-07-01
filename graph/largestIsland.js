const edges = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "t"],
  ["q", "u"],
];

const graph = directedConvertor(edges);
console.log(graph);
console.log(largestIsland(graph));

function directedConvertor(edges) {
  let graph = {};
  for (let val of edges) {
    let [a, b] = val;
    if (!(a in graph)) {
      graph[a] = [];
    }
    if (!(b in graph)) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

function largestIsland(graph) {
  let visited = new Set();
  let island = { count: 0, largest: 0 };
  for (let key in graph) {
    if (!visited.has(key)) {
      depthFTRecursive(graph, key, visited, island);

      if (island.largest < island.count) {
        island.largest = island.count;
      }
      island.count = 0;
    }
  }
  return island.largest;
}

function depthFTRecursive(graph, start, visited, island) {
  if (!visited.has(start)) {
    island.count += 1;
    visited.add(start);
    for (let neigbour of graph[start]) {
      depthFTRecursive(graph, neigbour, visited, island);
    }
  }
}
