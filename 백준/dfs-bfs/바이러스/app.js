/**
 * @link https://www.acmicpc.net/submit/2606/92875114
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N], [edge], ...edges] = input;

  const graph = Array.from({ length: N + 1 }, () => []);
  const visited = Array(N + 1).fill(false);
  for (const [n1, n2] of edges) {
    graph[n1].push(n2);
    graph[n2].push(n1);
  }

  let count = 0;

  const dfs = (start) => {
    const nearList = graph[start];
    visited[start] = true;
    nearList?.forEach((n) => {
      if (!visited[n]) {
        dfs(n);
        count++;
      }
    });
  };

  dfs(1);
  console.log(count);
}

solution(input);
