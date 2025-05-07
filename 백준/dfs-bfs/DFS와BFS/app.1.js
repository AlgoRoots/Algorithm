/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 *
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N, M, V], ...edges] = input;
  const graph = Array.from({ length: N + 1 }, () => []);

  edges.forEach(([v1, v2]) => {
    graph[v1].push(v2);
    graph[v2].push(v1);
  });

  graph.forEach((e) => e.sort((a, b) => a - b));

  const dfs = (start) => {
    const path = [];
    const visited = Array(N + 1).fill(false);

    const traversal = (v) => {
      visited[v] = true;
      path.push(v);
      const nearList = graph[v];
      nearList.forEach((next) => {
        if (!visited[next]) {
          traversal(next);
        }
      });
    };
    traversal(start);
    return path;
  };

  const bfs = (start) => {
    const queue = [start];
    const path = [];
    const visited = Array(N + 1).fill(false);
    visited[start] = true;

    while (queue.length) {
      const cur = queue.shift();
      path.push(cur);
      // 여기서는 방문처리안해 ?

      const nearList = graph[cur];
      nearList.forEach((next) => {
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      });
    }
    return path;
  };

  console.log(dfs(V));
  console.log(bfs(V));
}

console.log(solution(input));
