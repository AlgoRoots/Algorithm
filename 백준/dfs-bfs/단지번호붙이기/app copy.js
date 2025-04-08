/**
 * @link https://www.acmicpc.net/problem/2667
 */

/**
 * 1로 연결된 곳은 하나의 집
 * 모든 연결된 곳을 찾아야 하기 때문에 dfs
 * 탐색
 * - visited로 방문 기록 x,y 저장,
 * - dir 필요, 전후좌우 탐색 (방문 안했을 떄)
 * - 인접에 0이 나오면 하나의 단지 >  list에  저장 (이중배열)
 *
 * 전부 탐색 후 list 분석 후 결과 리턴
 * > 첫 번째 줄에는 총 단지수를 출력하시오. 그리고 각 단지내 집의 수를 오름차순으로 정렬하여 한 줄에 하나씩 출력
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄();

function solution(input) {
  const [l, ...rest] = input;
  const N = +l;

  const cords = rest.map((lines) => lines.split("").map(Number));
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => false)
  );

  const isPassed = (y, x) => {
    const isRange = x >= 0 && y >= 0 && x < N && y < N;
    if (!isRange) return false;
    return !visited[y][x] && cords[y][x] === 1;
  };

  const list = [];
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const result = [];
  let count = 1;

  const dfs = (y, x) => {
    console.log("y", y);
    let count = 1;
    if (y === N - 1 && x === N - 1) {
      console.log("cc");
      result.push(count);
    }

    visited[y][x] = true;

    for (const [dy, dx] of dir) {
      const ny = y + dy;
      const nx = x + dx;

      if (isPassed(ny, nx)) {
        dfs(ny, nx, count + 1);
      }
    }
  };

  dfs(0, 0);
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (isPassed(y, x)) {
        result.push(dfs(y, x));
      }
    }
  }

  console.log(result);
}

solution(input);
