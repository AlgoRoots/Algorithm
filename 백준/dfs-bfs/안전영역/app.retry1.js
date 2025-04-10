/**
 * @link https://www.acmicpc.net/problem/2468
 */
const { createInput } = require("#helper/create-input");

let input = createInput().여러줄_띄어쓰기(Number);
// console.log("input", input);

/**
 *  안전영역의 최대 개수
 *  잠기지 않는 경우도 있음
 *  지역 최소 높이 -1 <= 비의 양 <= 지역 최대높이
 *  반복으로 탐색  y,x
 * -
 *
 */
function solution(input) {
  const [[N], ...cords] = input;
  console.log("cords", cords);

  const minH = Math.min(...cords.flat()) - 1;
  const maxH = Math.max(...cords.flat());
  console.log("minH", minH, maxH);

  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  const resetVisited = () => {
    for (let i = 0; i < N; i++) visited[i].fill(false);
  };

  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const isInRange = (y, x) => y >= 0 && x >= 0 && y < N && x < N;

  const bfs = (startY, startX, rain) => {
    const queue = [[startY, startX]];
    console.log("queue", queue);
    visited[startY][startX] = true;
    while (queue.length) {
      const [y, x] = queue.shift();

      for (const [dy, dx] of dirs) {
        const ny = dy + y;
        const nx = dx + x;
        if (isInRange(ny, nx) && !visited[ny][nx] && cords[ny][nx] > rain) {
          visited[ny][nx] = true;
          queue.push([ny, nx]);
        }
      }
    }
  };

  const result = [];
  for (let rain = minH; rain <= maxH; rain++) {
    resetVisited();
    let count = 0;
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        if (!visited[y][x] && cords[y][x] > rain) {
          bfs(y, x, rain);
          count++;
        }
      }
    }
    result.push(count);
  }

  console.log(Math.max(...result));
}

solution(input);
