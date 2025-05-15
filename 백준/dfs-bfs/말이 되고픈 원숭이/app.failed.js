/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 *
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[K], [W, H], ...cords] = input;
  const visited = Array.from({ length: H }, () => Array(W).fill(false));

  const monkeyDirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const horseDirs = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];
  const isValid = (y, x) => y >= 0 && x >= 0 && y < H && x < W;

  const bfs = (y, x) => {
    let horseLimit = 0;
    const queue = [[y, x, 0]];

    while (queue.length) {
      const [curY, curX, curCnt] = queue.shift();
      if (curY === H - 1 && curX === W - 1) return curCnt;

      for (let [hdy, hdx] of horseDirs) {
        const hny = hdy + curY;
        const hnx = hdx + curX;
        if (
          horseLimit !== K &&
          isValid(hny, hnx) &&
          !visited[hny][hnx] &&
          cords[hny][hnx] !== 1
        ) {
          visited[hny][hnx] = true;
          queue.push([hny, hnx, curCnt + 1]);
          horseLimit++;
        }
      }

      for (let [dy, dx] of monkeyDirs) {
        const ny = dy + curY;
        const nx = dx + curX;
        if (isValid(ny, nx) && !visited[ny][nx] && cords[ny][nx] !== 1) {
          visited[ny][nx] = true;
          queue.push([ny, nx, curCnt + 1]);
        }
      }
    }
    return -1;
  };

  return bfs(0, 0);
}

console.log(solution(input));
