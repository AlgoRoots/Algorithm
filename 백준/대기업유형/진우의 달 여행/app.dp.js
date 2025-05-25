/**
 * @link https://www.acmicpc.net/problem/17484
 */

/**
 * 달 여행에 필요한 최소 연료의 값을 출력한다.
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N, M], ...map] = input;

  const dp = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => Array(3).fill(Infinity))
  );

  const dirs = [-1, 0, 1]; // 왼, 중, 오

  // 첫 줄 각 칸에서 시작 , 방향마다 기록
  for (let x = 0; x < M; x++) {
    for (let d = 0; d < 3; d++) {
      dp[0][x][d] = map[0][x];
    }
  }

  console.log("dp", dp);

  for (let y = 1; y < N; y++) {
    for (let x = 0; x < M; x++) {
      for (let d = 0; d < 3; d++) {
        // 지금 위치에 오기 직전에 있었어야 하는 x좌표
        const prevX = x - dirs[d];
        // 격자 밖을 벗어나면 무시
        if (prevX < 0 || prevX >= M) continue;

        for (let prevD = 0; prevD < 3; prevD++) {
          if (prevD === d) continue; // 같은 방향 금지

          dp[y][x][d] = Math.min(
            dp[y][x][d],
            dp[y - 1][prevX][prevD] + map[y][x]
          );
        }
      }
    }
  }

  // 마지막 행 중 최소값 선택
  let result = Infinity;
  for (let x = 0; x < M; x++) {
    for (let d = 0; d < 3; d++) {
      result = Math.min(result, dp[N - 1][x][d]);
    }
  }

  return result;
}

console.log(solution(input));
