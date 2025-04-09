const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/2468
 */

/**
 * 인접한 안전영역의 최대 개수 리턴
 * 아무 지역도 물에 잠기지 않을 수 있음
 *
 * 비의 양에 따라 모든 경우 계산
 *  (x)지역 최소 높이 <= 비의 양 <= 지역 최대 높이
 * 아무 지역도 물에 잠기지 않을 수도 있다. > 케이스 대응 위해 수정
 *  (수정)지역 최소 높이 < 비의 양 <= 지역 최대 높이
 *
 * bfs  연결된 큰 영역이 한 번에 탐색될 수 있음
 * 0,0부터 시작해 인접 리스트 찾기
 * 비의 양 이하 = 0, 초과 = 1 이라 생각
 *
 * bfs 반복
 * y, x length만큼 반복
 * 좌표가  > h 이면서 방문 x > dfs(y,x)
 * BFS가 끝나면  count++
 *
 * 전역 maxCount
 * 비의 양 경우의 수 만큼 반복
 * 반복문 끝났을때 maxCount 와 현재 count max 비교
 * maxCount리턴
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "))
  .map((line) => line.map(Number));

function solution(input) {
  const [[N], ...cords] = input;

  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const visited = Array.from({ length: N }, () => Array(N).fill(false));

  const resetVisited = () => {
    for (let i = 0; i < N; i++) visited[i].fill(false);
  };

  const minH = Math.min(...cords.flat()) - 1;
  const maxH = Math.max(...cords.flat());
  const isRange = (y, x) => y >= 0 && x >= 0 && y < N && x < N;
  const isVisited = (y, x) => visited[y][x];
  const isSafe = (y, x, h) => cords[y][x] > h;

  const bfs = (startY, startX, h) => {
    const queue = [[startY, startX]];
    visited[startY][startX] = true;

    while (queue.length) {
      const [y, x] = queue.shift();
      for (const [dy, dx] of dirs) {
        const ny = y + dy;
        const nx = x + dx;

        if (isRange(ny, nx) && !isVisited(ny, nx) && isSafe(ny, nx, h)) {
          visited[ny][nx] = true;
          queue.push([ny, nx]);
        }
      }
    }
  };
  let maxCount = 0;
  for (let h = minH; h <= maxH; h++) {
    resetVisited();
    let count = 0;

    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        if (!isVisited(y, x) && isSafe(y, x, h)) {
          bfs(y, x, h);
          count++;
        }
      }
    }
    maxCount = Math.max(maxCount, count);
  }

  console.log(maxCount);
}

solution(input);
