function solution(maps) {
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const n = maps.length;
  const m = maps[0].length;

  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const isValid = (y, x) => y >= 0 && x >= 0 && y < n && x < m;

  const bfs = (sy, sx) => {
    const queue = [[sy, sx, 1]];
    visited[sy][sx] = true;
    while (queue.length > 0) {
      const [cy, cx, cnt] = queue.shift();

      if (cy === n - 1 && cx === m - 1) {
        return cnt;
      }

      for (let [dy, dx] of dirs) {
        const ny = dy + cy;
        const nx = dx + cx;
        if (isValid(ny, nx) && !visited[ny][nx] && maps[ny][nx] === 1) {
          visited[ny][nx] = true;
          queue.push([ny, nx, cnt + 1]);
        }
      }
    }
    return -1;
  };

  return bfs(0, 0);
}

console.log(
  solution([
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1],
  ])
);
