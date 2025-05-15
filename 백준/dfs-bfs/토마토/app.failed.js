/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 *
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[M, N], ...cords] = input;

  const isValid = (y, x) => y >= 0 && x >= 0 && y < N && x < M;

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const queue = []; // BFS 큐
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (cords[y][x] === 1) {
        queue.push([y, x, 0]); // 모든 익은 토마토를 동시에 큐에 넣기
        visited[y][x] = true;
      }
    }
  }

  let minDays = 0;

  while (queue.length) {
    const [cy, cx, cday] = queue.shift();
    console.log("cday", cday);
    minDays = Math.max(minDays, cday);

    for (let [dy, dx] of dirs) {
      const ny = dy + cy;
      const nx = dx + cx;

      if (isValid(ny, nx) && !visited[ny][nx] && cords[ny][nx] === 0) {
        visited[ny][nx] = true;
        queue.push([ny, nx, cday + 1]);
      }
    }
  }

  return minDays;
}

console.log(solution(input));
