const edges = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];

console.log(directedConvertor(edges));
const graph = directedConvertor(edges);
console.log(directBFSiterative(graph, "a", "q"));

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

function directDFR(graph, start, des, visited = new Set()) {
  if (!visited.has(start)) {
    if (start === des) {
      return true;
    }
    visited.add(start);
    for (let neigbour of graph[start]) {
      if (directDFR(graph, neigbour, des, visited)) {
        return true;
      }
    }
    return false;
  }
}

function directDFSIterative(graph, start, des, visited = new Set()) {
  let stack = [start];
  while (stack.length > 0) {
    const node = stack.pop();
    if (node === des) return true;
    if (!visited.has(node)) {
      visited.add(node);
      for (let neigbour of graph[node]) {
        if (!visited.has(neigbour)) {
          stack.push(neigbour);
        }
      }
    }
  }
  return false;
}

function directBFSiterative(graph, start, des, visited = new Set()) {
  let queue = [start];
  while (queue.length > 0) {
    const node = queue.shift();
    for (let neigbour of graph[node]) {
      if (neigbour === des) return true;
      if (!visited.has(neigbour)) {
        visited.add(neigbour);
        queue.push();
      }
    }
  }
  return false;
}
