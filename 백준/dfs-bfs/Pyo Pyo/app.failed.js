/**
 * @link https://www.acmicpc.net/problem/11559
 */

const { createInput } = require("#helper/create-input");

const input = createInput()
  .여러줄((str) => str.replace(/^\.+$/, "").split(""))
  .filter((v) => v.length > 0);

function solution(cord) {
  console.log("cord", cord);
  const M = cord[0].length;
  const N = cord.length;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const isValid = (y, x) => y >= 0 && x >= 0 && y < N && x < M;

  const bfs = (y, x, key, visited) => {
    const queue = [[key, y, x]];
    const nearList = [[y, x]];
    console.log("y", y, x, key);
    while (queue.length) {
      console.log("queue", queue);
      const [key, cy, cx] = queue.shift();

      for (let [dy, dx] of dirs) {
        const ny = dy + cy;
        const nx = dx + cx;
        if (isValid(ny, nx) && !visited[ny][nx] && cord[ny][nx] === key) {
          queue.push([key, ny, nx]);
          visited[ny][nx] = true;
          nearList.push([ny, nx]);
        }
      }
    }

    return nearList;
  };

  let pop = 0;

  while (true) {
    const visited = Array.from({ length: N }, () => Array(M).fill(false));
    console.log("visited", visited);
    const popList = [];

    for (let y = 0; y < N; y++) {
      for (let x = 0; x < M; x++) {
        const val = cord[y][x];
        if (val !== "." && !visited[y][x]) {
          visited[y][x] = true;
          const group = bfs(y, x, val, visited);

          if (group.length >= 4) {
            popList.push(...group);
            console.log("popList", popList);
          }
        }
      }
    }

    if (popList.length === 0) break;

    // 중력
    popList.forEach(([y, x]) => {
      cord[y][x] = ".";
    });

    for (let x = 0; x < M; x++) {
      const stack = [];
      for (let y = N - 1; y >= 0; y--) {
        if (cord[y][x] !== ".") {
          stack.push(cord[y][x]);
        }
      }

      for (let y = N - 1; y >= 0; y--) {
        cord[y][x] = stack[N - 1 - y] || ".";
      }
    }
    // 연쇄
    pop++;
  }
  return pop;
}

console.log(solution(input));
