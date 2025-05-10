/**
 * @link https://www.acmicpc.net/problem/
 */

const { createInput } = require("#helper/create-input");

const input = createInput().한줄(Number);

function solution(input) {
  const [N, K] = input;

  const dirs = (x) => [x - 1, x + 1, 2 * x];
  const visited = Array(100001).fill(false);

  const bfs = (start, time = 0) => {
    const queue = [[start, time]];
    visited[start] = true;
    while (queue.length) {
      const [cur, t] = queue.shift(); // 4 6 10
      if (cur === K) return t;
      for (let nx of dirs(cur)) {
        if (nx >= 0 && nx <= 100000 && !visited[nx]) {
          queue.push([nx, t + 1]);
          visited[nx] = true;
        }
      }
    }
  };

  return bfs(N);
}

console.log(solution(input));
