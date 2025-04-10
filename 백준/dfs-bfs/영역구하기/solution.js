const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/2583
 */

/**
 * dfs
 * 직사각형 영역 1 아닌영역 0으로
 * 반복문 가로 , 세로만큼?
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "))
  .map((line) => line.map(Number));

function solution(input) {
  const [[M, N, K], ...recs] = input;

  const visited = Array.from({ length: M }, () => Array(N).fill(false));

  const isInRange = (y, x) => x >= 0 && y >= 0 && y < M && x < N;
  const isRect = (y, x) => {
    return recs.some(
      ([minX, minY, maxX, maxY]) =>
        x >= minX && y >= minY && x < maxX && y < maxY
    );
  };

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const dfs = (y, x) => {
    let count = 1;
    visited[y][x] = true;
    for (const [dy, dx] of dirs) {
      const ny = dy + y;
      const nx = dx + x;
      if (isInRange(ny, nx) && !visited[ny][nx] && !isRect(ny, nx)) {
        visited[ny][nx] = true;
        count += dfs(ny, nx);
      }
    }
    return count;
  };

  const res = [];
  for (let m = 0; m < M; m++) {
    for (let n = 0; n < N; n++) {
      if (!visited[m][n] && !isRect(m, n)) {
        res.push(dfs(m, n));
      }
    }
  }
  console.log(res.length);
  console.log(res.sort((a, b) => a - b).join(" "));
}

solution(input);
