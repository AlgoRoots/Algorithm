const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/1389
 */

/**
 * 사람 1당 최단거리 bfs
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
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const bfs = (start) => {
    const visited = Array(N + 1).fill(false);
    const queue = [[start, 0]];
    visited[start] = true;
    let sum = 0;
    while (queue.length) {
      const [cur, depth] = queue.shift();
      sum += depth;
      for (const next of graph[cur]) {
        if (!visited[next]) {
          visited[next] = true;
          queue.push([next, depth + 1]);
        }
      }
    }
    return sum;
  };

  const result = [];

  for (let i = 1; i <= N; i++) {
    result.push(bfs(i));
  }

  console.log(result.findIndex((v) => v === Math.min(...result)) + 1);
}

solution(input);
