const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 *
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "))
  .map((line) => line.map(Number));

function solution(input) {
  const [[n], [t1, t2], [m], ...edges] = input;

  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array(n + 1).fill(false);

  edges.forEach(([v1, v2]) => {
    graph[v1].push(v2);
    graph[v2].push(v1);
  });

  const bfs = (start, depth) => {
    const queue = [[start, depth]];
    visited[start] = true;

    while (queue.length) {
      const [cur, dep] = queue.shift();
      if (cur === t2) {
        return dep;
      }
      const nearList = graph[cur];
      for (let next of nearList) {
        if (!visited[next]) {
          queue.push([next, dep + 1]);
          visited[next] = true;
        }
      }
    }
    return -1;
  };

  return bfs(t1, 0);
}

console.log(solution(input));
