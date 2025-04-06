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
 *
 * 재귀방식 (Recursive)
 * 시작 노드를 입력하는 함수를 작성한다. (DepthFirstSearch fn)
 * - 빈 배열을 만들어서 최종 결과를 저장한다. (result)
 * - 정점을 저장할 수 있는 객체를 만든다. ({A: true, B: true})
 *
 * 정점을 입력하는 헬퍼함수를 만든다. (DFS fn) 재귀
 * - 정점이 비어있으면 early return
 * - 입력한 정점을 방문객체에 넣는다.방문했다는 표시를 하고 result에 push
 * - 해당 정점의 모든 인접전에 대해 방문하지 않았다면 헬퍼함수 재귀 호출
 *
 * 시작 정점을 헬퍼함수에 호출한다.
 * return result
 *
 * 순회방식 (Iterative)
 * 시작 노드를 입력하는 함수를 작성한다. (depthFirstIterative fn)
 * 스택을 만든다 (배열사용)
 * 최종 결과 result 배열 만든다.
 * 방문한 정점들을 담을 object를 만든다.
 * 시작하는 지점의 정점을 스택에 넣어준다.
 * while (스택의 길이가 있는 한)
 *  다음 정점 stack에서 pop
 *  그 정점이 아직 방문 전이면
 *  - 해당 정점을 방문처리한다.
 *  - result에 추가한다.
 *  - 인접점들을 모두 스택에 push 한다.
 *
 * return result
 *
 *
 *
 */

const { Graph: BaseGraph } = require("../Graph");

class Graph extends BaseGraph {
  // 재귀 방식  [ 'A', 'B', 'D', 'E', 'C', 'F' ]
  depthFirstRecursive(start) {
    const result = [];
    const visitedMap = new Map();
    const adjacencyList = this.adjacencyList;

    const traversal = (v) => {
      if (!adjacencyList.has(v)) return;
      visitedMap.set(v, true);
      result.push(v);
      const nearList = adjacencyList.get(v);
      nearList.forEach((neighbor) => {
        if (!visitedMap.has(neighbor)) return traversal(neighbor);
      });
    };

    traversal(start);
    return result;
  }
  // 순회 방식  [ 'A', 'C', 'E', 'F', 'D', 'B' ]
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = new Map();
    const adjacencyList = this.adjacencyList;
    visited.set(start, true);

    while (stack.length) {
      const popped = stack.pop();
      result.push(popped);
      const nearList = [...adjacencyList.get(popped)];
      nearList?.forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.set(neighbor, true);
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}
const graph = new Graph();
graph.addVertex("5");
graph.addVertex("4");
graph.addVertex("2");
graph.addVertex("1");
graph.addVertex("3");
// graph.addVertex("F");

graph.addEdge("5", "4");
graph.addEdge("5", "2");
graph.addEdge("1", "2");
graph.addEdge("3", "4");
graph.addEdge("3", "1");
// graph.addEdge("D", "F");
// console.log(graph.addEdge("E", "F"));

console.log("dfs 재귀", graph.depthFirstRecursive("3"));
console.log("dfs 순회", graph.depthFirstIterative("3"));
