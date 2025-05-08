/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 *
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄((v, idx) => {
  if (idx === 0) return v.split(" ").map(Number);
  return v.split("").map(Number);
});

function solution(input) {
  const [[N, M], ...cords] = input;

  const visited = Array.from({ length: N + 1 }, () => Array(M + 1).fill(false));
  console.log("visited", visited);

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let count = 1;

  const bfs = (start) => {
    const [startY, startX] = start;
    const queue = [start];
    visited[startY][startX] = true;

    while (queue.length) {
      const [curY, curX] = queue.shift();
      if (curY > N && curX > M) {
        return count;
      }

      for (let [dy, dx] of dirs) {
        const ny = dy + curY;
        const nx = dx + curX;
        if (
          ny >= 0 &&
          nx >= 0 &&
          ny < N &&
          nx < M &&
          !visited[ny][nx] &&
          cords[ny][nx] > 0
        ) {
          queue.push([ny, nx]);
          visited[ny][nx] = true;
          count++;
        }
      }
    }
  };

  bfs([0, 0]);

  console.log("cords", count);
}

console.log(solution(input));
