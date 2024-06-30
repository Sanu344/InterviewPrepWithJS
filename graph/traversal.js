const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

traversalDFI(graph, "a");
traversalDFR(graph, "a");
traversalBFI(graph, "a");
function traversalDFI(graph, start, visited = new Set()) {
  let stack = [start];
  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);
      for (let neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }
}
function traversalDFR(graph, start, visited = new Set()) {
  if (!visited.has(start)) {
    visited.add(start);
    console.log(start);
    for (let neigbour of graph[start]) {
      traversalDFR(graph, neigbour, visited);
    }
  }
}
function traversalBFI(graph, start, visited = new Set()) {
  let queue = [start];
  while (queue.length > 0) {
    const node = queue.shift();
    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push(neighbour);
        console.log(neighbour);
      }
    }
  }
}
