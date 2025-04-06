const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/2178
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v, idx) =>
    idx === 0 ? v.split(" ").map(Number) : v.split("").map(Number)
  );

function solution(input) {
  const [[rows, cols], ...cords] = input;

  const visited = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => false)
  );

  const isRange = (y, x) => {
    const a = y >= 0 && x >= 0;
    const b = y < rows && x < cols;
    return a && b;
  };

  const bfs = (y, x, dist) => {
    const queue = [[y, x, dist]];
    visited[y][x] = true;

    while (queue.length) {
      const [y, x, dist] = queue.shift();
      if (y === rows - 1 && x === cols - 1) {
        return dist;
      }

      for (let [dy, dx] of [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
      ]) {
        const ny = y + dy;
        const nx = x + dx;
        if (isRange(ny, nx) && cords[ny][nx] === 1 && !visited[ny][nx]) {
          visited[ny][nx] = true;
          queue.push([ny, nx, dist + 1]);
        }
      }
    }
  };

  console.log(bfs(0, 0, 1));
}

solution(input);
