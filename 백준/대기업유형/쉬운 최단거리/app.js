/**
 * @link https://www.acmicpc.net/problem/14940
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[n, m], ...graph] = input;

  let target = [0, 0];
  graph.forEach((list, y) => {
    const idx = list.findIndex((v) => v === 2);
    if (idx !== -1) {
      target = [y, idx];
      return;
    }
  });

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  const bfs = ([y, x]) => {
    const queue = [[y, x, 0]];
    visited[y][x] = true;
    graph[y][x] = 0;

    while (queue.length > 0) {
      const [cy, cx, cnt] = queue.shift();

      for (const [dy, dx] of dirs) {
        const ny = dy + cy;
        const nx = dx + cx;
        if (
          ny >= 0 &&
          nx >= 0 &&
          nx < m &&
          ny < n &&
          !visited[ny][nx] &&
          graph[ny][nx] === 1
        ) {
          queue.push([ny, nx, cnt + 1]);
          graph[ny][nx] = cnt + 1;
          visited[ny][nx] = true;
        }
      }
    }
  };

  bfs(target);

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (graph[y][x] === 1 && !visited[y][x]) {
        graph[y][x] = -1;
      }
    }
  }

  return graph.map((v) => v.join(" ")).join("\n");
}

console.log(solution(input));
