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
 * dfs
 * 0,0부터 시작해 인접 리스트 찾기
 * 비의 양 이하 = 0, 초과 = 1
 *
 * dfs 반복
 * y, x length만큼 반복
 * 좌표가 1이면서 방문 x > dfs(y,x)
 * dfs 리턴 값 (인접 count ) list 추가
 *
 * 이거 또 반복 비의 양 경우의 수 만큼
 * 구한 list들의 length 최대값 최종 리턴
 *
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

  const minH = Math.min(...cords.flat()) - 1;
  const maxH = Math.max(...cords.flat());
  const isRange = (y, x) => y >= 0 && x >= 0 && y < N && x < N;
  const isVisited = (y, x, visited) => visited[y][x];
  const isSafe = (y, x, h) => cords[y][x] > h;

  const dfs = (y, x, h, visited) => {
    visited[y][x] = true;

    for (const [dy, dx] of dirs) {
      const ny = y + dy;
      const nx = x + dx;

      if (isRange(ny, nx) && !isVisited(ny, nx, visited) && isSafe(ny, nx, h)) {
        dfs(ny, nx, h, visited);
      }
    }
  };
  let maxCount = 0;
  for (let h = minH; h <= maxH; h++) {
    const visited = Array.from({ length: N }, () =>
      Array.from({ length: N }, () => false)
    );
    let count = 0;
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        if (!isVisited(y, x, visited) && isSafe(y, x, h)) {
          dfs(y, x, h, visited);
          count++;
        }
      }
    }
    maxCount = Math.max(maxCount, count);
  }

  console.log(maxCount);
}

solution(input);
