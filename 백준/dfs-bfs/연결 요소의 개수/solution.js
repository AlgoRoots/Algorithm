const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/11724
 */

/**
 * 간단하면 배열 index로 접근하는 방식으로
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "))
  .map((line) => line.map(Number));

function solution(input) {
  const [[N, M], ...edges] = input;

  const graph = Array.from({ length: N + 1 }, () => []);
  const visited = Array(N + 1).fill(false);

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const dfs = (node) => {
    visited[node] = true;
    const linked = graph[node];

    for (const next of linked) {
      if (!visited[next]) {
        dfs(next);
      }
    }
  };

  let linkedCnt = 0;
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      dfs(i);
      linkedCnt++;
    }
  }

  console.log(linkedCnt);
}

solution(input);
