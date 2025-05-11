/**
 * @link https://www.acmicpc.net/problem/
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);
/**
 * 1 2 2
 * 1 3 1
 * 1 4 1
 * 1 5 2
 */
function solution(input) {
  const [[N, M], ...edges] = input;
  const graph = Array.from({ length: N + 1 }, () => []);

  edges.forEach(([v1, v2]) => {
    graph[v1].push(v2);
    graph[v2].push(v1);
  });

  const bfs = (start) => {
    const visited = Array(N + 1).fill(false);
    const queue = [[start, 0]];
    visited[start] = true;
    let total = 0;

    while (queue.length) {
      const [cur, depth] = queue.shift();
      total += depth;
      const nearList = graph[cur];
      for (let next of nearList) {
        if (!visited[next] && start !== next) {
          visited[next] = true;
          queue.push([next, depth + 1]);
        }
      }
    }
    return total;
  };

  let res = [];

  for (let i = 1; i <= N; i++) {
    res.push(bfs(i));
  }

  return res.findIndex((v) => Math.min(v, ...res) === v) + 1;
}

console.log(solution(input));
