const edges = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["s", "r"],
  ["q", "u"],
  ["q", "t"],
];

const graph = directedConvertor(edges);
console.log(graph);
connecetedIsland(graph);

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

function connecetedIsland(graph) {
  let visited = new Set();
  let count = 0;
  for (let key in graph) {
    if (!visited.has(key)) {
      count++;

      let stack = [key];

      while (stack.length > 0) {
        const node = stack.pop();
        if (!visited.has(node)) {
          visited.add(node);
          for (let neigbour of graph[node]) {
            if (!visited.has(neigbour)) {
              stack.push(neigbour);
            }
          }
        }
      }
    }
  }
  console.log(count);
}
