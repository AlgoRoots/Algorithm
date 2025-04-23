/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 *
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄(Number);

function solution(input) {
  const [N, ...scores] = input;
  const dp = Array(N + 1).fill(0);
  scores.unshift(0);

  if (N === 1) return console.log(scores[1]);

  dp[1] = scores[1];
  dp[2] = scores[1] + scores[2];

  for (let i = 3; i <= N; i++) {
    dp[i] = Math.max(
      dp[i - 2] + scores[i], // 두계단
      dp[i - 3] + scores[i - 1] + scores[i] // 세계단 한계단  + 현재계단
    );
  }
  console.log(dp[N]);
}

solution(input);
