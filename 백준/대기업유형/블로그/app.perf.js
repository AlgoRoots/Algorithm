/**
 * @link https://www.acmicpc.net/problem/21921
 */

/**
 * 블로그 시작 N일 지남
 * X일동안 가장 많은 방문자수와 기간 출력
 *
 */

// visited = [5, 1, 3, 2, 6], X = 3
// 초기 구간 (0~2): sum = 5 + 1 + 3 = 9
// 다음 구간 (1~3): sum = 1 + 3 + 2 = (이전 sum) - 5 + 2 = 9 - 5 + 2 = 6

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N, X], visited] = input;

  let sum = 0;
  let max = 0;
  let period = 1;

  // 초기 윈도우 계산
  for (let i = 0; i < X; i++) {
    sum += visited[i];
  }
  console.log("!sum", sum); //5

  max = sum;

  // 윈도우 슬라이딩
  // 1(i:0) + 4(i:1) = 5
  // i === 2
  // 5 + 2(i:2) - 1(i:0)  = 6
  // i === 3
  // 6 + 5(i:3) - 4(i:1) = 7
  for (let i = X; i < N; i++) {
    sum += visited[i] - visited[i - X];
    if (sum > max) {
      max = sum;
      period = 1;
    }
    if (sum === max) {
      period++;
    }
  }

  return max === 0 ? "SAD" : `${max}\n${period}`;
}

console.log(solution(input));
