/**
 * @failed
 * @link https://www.acmicpc.net/problem/10971
 */

/**
 *
 * 도시의 수 N
 * A > B 비용 i,j
 * B > A 비용 j,i
 *
 *
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N], ...W] = input;

  const visited = Array(N).fill(false);
  let minCost = Infinity;

  function dfs(start, curr, cost, count) {
    if (count === N && W[curr][start] > 0) {
      minCost = Math.min(minCost, cost + W[curr][start]);
      return;
    }

    for (let next = 0; next < N; next++) {
      if (!visited[next] && W[curr][next] > 0) {
        visited[next] = true;
        dfs(start, next, cost + W[curr][next], count + 1);
        visited[next] = false;
      }
    }
  }
  for (let i = 0; i < N; i++) {
    visited[i] = true;
    dfs(i, i, 0, 1);
    visited[i] = false;
  }
  console.log(minCost);
  // console.log(bfs(0, 0));

  // for (let i = 0; i < N; i++) {}
  // console.log("visited", visited, graph);
}

solution(input);
