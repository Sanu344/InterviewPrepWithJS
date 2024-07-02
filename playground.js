const edges = [
  ["4", "5"],
  ["5", "6"],
  ["5", "7"],
  ["7", "11"],
  ["7", "12"],
  ["11", "13"],
  ["12", "15"],
  ["15", "13"],
];

const graph = directedConvertor(edges);
console.log(graph);
console.log(shortestPath(graph, "4", "13"));

function shortestPath(graph, start, des) {
  const track = {
    node: start,
    hops: 0,
  };

  let visited = new Set();
  let shortestPath = null;
  let longestPath = 0;
  let queue = [track];

  while (queue.length > 0) {
    const { node, hops } = queue.shift();

    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        if (neighbour === des) {
          const pathLength = hops + 1;
          if (!shortestPath) {
            shortestPath = pathLength;
          } else {
            shortestPath =
              shortestPath > pathLength ? pathLength : shortestPath;
            if (longestPath < pathLength) longestPath = pathLength;
          }
        } else {
          visited.add(neighbour);
          queue.push({ node: neighbour, hops: hops + 1 });
        }
      }
    }
  }
  return { shortestPath: shortestPath, longestPath: longestPath };
}

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
