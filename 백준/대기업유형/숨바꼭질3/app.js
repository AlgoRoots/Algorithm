/**
 * @link https://www.acmicpc.net/problem/13549
 */

/**
 *4:50 -5:13
 */

const { createInput } = require("#helper/create-input");

const input = createInput().한줄(Number);

function solution(input) {
  const [N, K] = input;
  const MAX = 100001;
  const visited = Array(MAX).fill(false);

  const dirs = (x) => [
    [2 * x, 0],
    [x - 1, 1],
    [x + 1, 1],
  ];

  const bfs = (start) => {
    const queue = [[start, 0]];

    while (queue.length > 0) {
      const [cur, sec] = queue.shift();
      if (cur === K) return sec;
      if (visited[cur]) continue;
      visited[cur] = true;

      for (const [nx, cost] of dirs(cur)) {
        if (nx >= 0 && nx <= 100000 && !visited[nx]) {
          queue.push([nx, sec + cost]);
        }
      }
    }
  };

  return bfs(N);
}

console.log(solution(input));
