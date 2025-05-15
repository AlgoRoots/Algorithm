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
  const visited = Array.from({ length: H }, () =>
    Array.from({ length: W }, () => Array(K + 1).fill(false))
  );
  console.log("visited", visited);

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
    const queue = [[y, x, 0, 0]];

    while (queue.length) {
      const [curY, curX, curCnt, curHorseCnt] = queue.shift();

      console.log(
        `🧭 방문: (${y}, ${x}) | 이동 수: ${curCnt} | 말 사용: ${curHorseCnt}`
      );

      if (curY === H - 1 && curX === W - 1) {
        console.log(`🎯 도착! 최소 이동 수: ${curCnt}`);
        return curCnt;
      }

      if (curHorseCnt < K) {
        for (let [hdy, hdx] of horseDirs) {
          const hny = hdy + curY;
          const hnx = hdx + curX;
          const hnc = curHorseCnt + 1;
          if (
            isValid(hny, hnx) &&
            !visited[hny][hnx][hnc] &&
            cords[hny][hnx] !== 1
          ) {
            console.log(`🐎 말 이동 → (${hny}, ${hnx}) | 사용 횟수: ${hnc}`);

            visited[hny][hnx][hnc] = true;
            queue.push([hny, hnx, curCnt + 1, hnc]);
          }
        }
      }

      for (let [dy, dx] of monkeyDirs) {
        const ny = dy + curY;
        const nx = dx + curX;
        if (
          isValid(ny, nx) &&
          !visited[ny][nx][curHorseCnt] &&
          cords[ny][nx] !== 1
        ) {
          console.log(`🙈 일반 이동 → (${ny}, ${nx})`);
          visited[ny][nx][curHorseCnt] = true;
          queue.push([ny, nx, curCnt + 1, curHorseCnt]);
        }
      }
    }
    return -1;
  };

  return bfs(0, 0);
}

console.log(solution(input));
