/**
 * @link https://www.acmicpc.net/problem/2583
 */

/**
 * dfs
 * 직사각형 영역 1 아닌영역 0으로
 * 반복문 가로 , 세로만큼?
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[M, N, K], ...recs] = input;

  const graph = Array.from({ length: M }, () => Array(N).fill(0));
  const visited = Array.from({ length: M }, () => Array(N).fill(false));

  for (const [minX, minY, maxX, maxY] of recs) {
    for (let y = minY; y < maxY; y++) {
      for (let x = minX; x < maxX; x++) {
        graph[y][x] = 1;
      }
    }
  }

  const isInRange = (y, x) => x >= 0 && y >= 0 && y < M && x < N;

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
      if (isInRange(ny, nx) && !visited[ny][nx] && graph[ny][nx] === 0) {
        visited[ny][nx] = true;
        count += dfs(ny, nx);
      }
    }
    return count;
  };

  const res = [];
  for (let m = 0; m < M; m++) {
    for (let n = 0; n < N; n++) {
      if (!visited[m][n] && graph[m][n] === 0) {
        res.push(dfs(m, n));
      }
    }
  }
  console.log(res.length);
  console.log(res.sort((a, b) => a - b).join(" "));
}

solution(input);
