/**
 * 그래프 순회 사용 예시
 *
 * 동료간의 네트워킹
 * 웹 크롤러
 * 최단거리 찾기 (추천, 매칭)
 * GPS navigation
 * Solving mazes
 * AI (shortest path to win the game)
 *
 */

/**
 * Depth First (깊이 우선)
 * 시작 노드를 입력하는 함수를 작성한다.
 * 큐를 만들고 시작점을 넣어준다. (배열사용)
 * 최종 결과 result 배열 만든다.
 * 방문한 정점들을 담을 object를 만든다.
 * 시작하는 지점의 정점을 visited에 넣어준다.
 * while (큐에 길이가 있는 한)
 * queue에서 shift
 * visited에 push
 * 인접리스트에 대해 방문하지 않았다면 방문처리하고, 큐에 추가해준다.
 *
 * return result
 *
 *
 *
 */

const { Graph: BaseGraph } = require("../Graph");

class Graph extends BaseGraph {
  // 재귀 방식  [ 'A', 'B', 'C', 'D', 'E', 'F' ]
  breadthFirst(start) {
    const queue = [start];
    const visited = new Map();
    const result = [];
    const adjacencyList = this.adjacencyList;
    let curVertex;
    visited.set(start, true);

    while (queue.length) {
      curVertex = queue.shift();
      result.push(curVertex);
      const nearList = [...adjacencyList.get(curVertex)];
      nearList?.forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.set(neighbor, true);
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
console.log(graph.addEdge("E", "F"));

console.log("bfs", graph.breadthFirst("A"));
