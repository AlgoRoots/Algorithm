const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/17484
 */

/**
 * 달 여행에 필요한 최소 연료의 값을 출력한다.
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "))
  .map((line) => line.map(Number));

function solution(input) {
  const [[N, M], ...coords] = input;

  const dirs = [
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const isValid = (y, x) => y >= 0 && x >= 0 && y < N && x < M;
  let minCost = Infinity;

  const dfs = (y, x, cost = coords[y][x], [py, px] = [-1, -1]) => {
    if (cost > minCost) return;
    if (y === N - 1) {
      minCost = Math.min(cost, minCost);
    }
    for (let [dy, dx] of dirs) {
      const ny = y + dy;
      const nx = x + dx;

      if (isValid(ny, nx) && (py !== dy || px !== dx)) {
        dfs(ny, nx, cost + coords[ny][nx], [dy, dx]);
      }
    }
  };

  for (let x = 0; x < M; x++) {
    dfs(0, x);
  }

  return minCost;
}

console.log(solution(input));
