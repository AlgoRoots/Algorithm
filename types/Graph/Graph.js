// 양방향
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex))
      this.adjacencyList.set(vertex, new Set());
  }

  addEdge(v1, v2) {
    this.adjacencyList.get(v1)?.add(v2);
    this.adjacencyList.get(v2)?.add(v1);
    return [...this.adjacencyList];
  }

  removeEdge(v1, v2) {
    this.adjacencyList.get(v1)?.delete(v2);
    this.adjacencyList.get(v2)?.delete(v1);
    return [...this.adjacencyList];
  }

  removeVertex(vertex) {
    if (!this.adjacencyList.get(vertex)) return;
    [...this.adjacencyList.get(vertex)].forEach((v) => {
      this.removeEdge(vertex, v);
    });
    this.adjacencyList.delete(vertex);
    return [...this.adjacencyList];
  }
}

const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");

console.log(graph.addEdge("Tokyo", "Dallas"));
console.log(graph.addEdge("Tokyo", "Aspen"));
console.log(graph.addEdge("Dallas", "Aspen"));
// console.log(graph.removeEdge("Tokyo", "Dallas"));
console.log(graph.removeVertex("Tokyo"));
