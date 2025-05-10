/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 *
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N], ...cords] = input;

  const min = 1;
  const max = Math.max(...cords.flat());

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const bfs = ([y, x], rain, visited) => {
    visited[y][x] = true;
    const queue = [[y, x]];
    while (queue.length) {
      const [cy, cx] = queue.shift();
      for (let [dy, dx] of dirs) {
        const ny = cy + dy;
        const nx = cx + dx;
        if (
          ny >= 0 &&
          nx >= 0 &&
          ny < N &&
          nx < N &&
          !visited[ny][nx] &&
          cords[ny][nx] > rain
        ) {
          visited[ny][nx] = true;
          queue.push([ny, nx]);
        }
      }
    }
  };

  let maxSafetyArea = 0;
  for (let rain = min; rain <= max; rain++) {
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    let safetyArea = 0;
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        if (!visited[y][x] && cords[y][x] > rain) {
          bfs([y, x], rain, visited);
          safetyArea++;
        }
      }
    }

    maxSafetyArea = Math.max(maxSafetyArea, safetyArea);
  }
  return maxSafetyArea;
}

console.log(solution(input));
