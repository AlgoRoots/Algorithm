// rec :  [좌측 하단 x, 좌측 하단 y, 우측 상단 x, 우측 상단 y] 좌표
function solution(rectangle, characterX, characterY, itemX, itemY) {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const boardSize = 102;
  const visited = Array.from({ length: boardSize }, () =>
    Array(boardSize).fill(false)
  );

  const isValid = (x, y) => x >= 0 && y >= 0 && x < boardSize && y < boardSize;

  const isBorderLine = (y, x) => {
    let isBorder = false;
    let isInside = false;

    for (let [lx, ly, rx, ry] of rectangle) {
      const checkX = (x === lx || x === rx) && y >= ly && y <= ry;
      const checkY = (y === ly || y === ry) && x >= lx && x <= rx;
      if (checkX || checkY) {
        isBorder = true;
      }
      if (lx < x && x < rx && ly < y && y < ry) {
        isInside = true;
      }
    }

    return isBorder && !isInside;
  };

  const isConnected = (py, px, ny, nx) => {
    const midX = (px + nx) / 2;
    const midY = (py + ny) / 2;
    return isBorderLine(midY, midX);
  };

  const bfs = (sy, sx) => {
    const queue = [[sy, sx, 0, [[sy, sx]]]];
    visited[sy][sx] = true;

    while (queue.length > 0) {
      const [cy, cx, cnt] = queue.shift();
      if (cy === itemY && cx === itemX) {
        return cnt;
      }
      for (let [dy, dx] of dirs) {
        const ny = dy + cy;
        const nx = dx + cx;
        if (
          isValid(ny, nx) &&
          isBorderLine(ny, nx) &&
          isConnected(cy, cx, ny, nx) &&
          !visited[ny][nx]
        ) {
          queue.push([ny, nx, cnt + 1]);
          visited[ny][nx] = true;
        }
      }
    }
  };
  return bfs(characterY, characterX);
}

solution(
  [
    [1, 1, 7, 4],
    [3, 2, 5, 5],
    [4, 3, 6, 9],
    [2, 6, 8, 8],
  ],
  1,
  3,
  7,
  8
);
solution([[1, 1, 5, 7]], 1, 1, 4, 7);
solution(
  [
    [2, 2, 5, 5],
    [1, 3, 6, 4],
    [3, 1, 4, 6],
  ],
  1,
  4,
  6,
  3
);
