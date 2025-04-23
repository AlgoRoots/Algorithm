/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 * @failed
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄(Number);

function solution(input) {
  const [N, ...cases] = input;
  const dp = Array(11).fill(0);
  console.log("cases", dp, cases);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2; // 1+1 2

  for (let i = 3; i <= 10; i++) {
    dp[i] += dp[i - 1];
    dp[i] += dp[i - 2];
    dp[i] += dp[i - 3];
  }

  cases.forEach((n) => {
    console.log(dp[n]);
  });
}

solution(input);
