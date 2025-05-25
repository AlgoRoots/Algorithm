/**
 * @link https://www.acmicpc.net/problem/17484
 */

/**
 * 달 여행에 필요한 최소 연료의 값을 출력한다.
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N, M], ...coords] = input;

  const dirs = [
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const isValid = (y, x) => y >= 0 && x >= 0 && y < N && x < M;
  let minCost = Infinity;

  const dfs = (y, x, visited, cost = coords[y][x], [py, px] = [-1, -1]) => {
    if (cost > minCost) return;
    if (y === N - 1) {
      minCost = Math.min(cost, minCost);
    }
    for (let [dy, dx] of dirs) {
      const ny = y + dy;
      const nx = x + dx;

      if (isValid(ny, nx) && (py !== dy || px !== dx)) {
        dfs(ny, nx, visited, cost + coords[ny][nx], [dy, dx]);
      }
    }
  };

  for (let x = 0; x < M; x++) {
    const visited = Array.from({ length: N }, () => Array(M).fill(false));
    dfs(0, x, visited);
  }

  return minCost;
}

console.log(solution(input));
