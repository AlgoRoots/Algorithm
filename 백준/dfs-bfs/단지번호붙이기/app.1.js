/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 *
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄();

function solution(input) {
  const [N, ...rest] = input;

  const cords = rest.map((v) => v.split("").map(Number));
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => false)
  );
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const dfs = ([y, x]) => {
    visited[y][x] = true;
    let count = 1;
    for (let [dy, dx] of dirs) {
      const ny = dy + y;
      const nx = dx + x;
      if (
        ny >= 0 &&
        nx >= 0 &&
        ny < N &&
        nx < N &&
        !visited[ny][nx] &&
        cords[ny][nx] === 1
      ) {
        count += dfs([ny, nx]);
      }
    }

    return count;
  };

  const res = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && cords[i][j] === 1) {
        res.push(dfs([i, j], 1));
      }
    }
  }

  res.sort((a, b) => a - b);

  return [res.length, ...res].join("\n");
}

console.log(solution(input));
