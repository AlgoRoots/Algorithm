// BFS 구조는 두 개의 큐를 활용하는데, DFS는 한 개의 스택과 한 개의 큐를 사용한다는 차이가 있음
// BFS 구조는 이전 노드와 연결된 노드들을 먼저 탐색해야 하기 때문에 queue.
// DFS는 이전 노드가 아니라 자기 자신과 연결되었던 노드들 먼저 탐색하기 때문에 stack을 사용한다.
// https://ryusm.tistory.com/48

// 재귀구현 https://developer-mac.tistory.com/79

// 시간복잡도
// DFS와 BFS는 모두 노드 수+간선 수만큼의 복잡도를 지닌다. 즉, O(n)

const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const dfs = (graph, startNode) => {
  let visitedQueue = []; // 탐색을 마친 노드들
  let needVisitStack = []; // 탐색해야할 노드들

  needVisitStack.push(startNode); // 노드 탐색 시작

  // 탐색해야할 노드가 남아있다면
  while (needVisitStack.length !== 0) {
    const node = needVisitStack.pop();
    if (!visitedQueue.includes(node)) {
      visitedQueue.push(node);
      needVisitStack = [...needVisitStack, ...graph[node]];
    }
  }
  return visitedQueue;
};
console.log(dfs(graph, "A"));
