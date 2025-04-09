const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/submit/2606/92875114
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "))
  .map((line) => line.map(Number));

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
