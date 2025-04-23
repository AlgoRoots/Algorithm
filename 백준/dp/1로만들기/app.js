/**
 * @link https://www.acmicpc.net/problem/1463
 */

/**
 *
 */

const { createInput } = require("#helper/create-input");

const input = createInput().한줄(Number);

function solution([n]) {
  const dp = Array(n + 1).fill(0); // dp[i] = i를 1로 만들기 위한 최소 연산 횟수

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1; // 1을 빼는 경우 의 최소 연산 횟수

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }

    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
  }

  console.log(dp[n]); // 정답: 최소 연산 횟수
}

solution(input);
