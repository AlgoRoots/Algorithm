/**
 * @link https://www.acmicpc.net/problem/24499
 *
 */

const { defineInput, getInput } = require("#helper/input-config-helper");

const inputConfig = defineInput("multiLineSpace", (v) => +v);

const input = getInput(inputConfig);

function solution(input) {
  const [[N, K], scores] = input;

  let max = 0;
  let sum = 0;
  for (let i = 0; i < K; i++) {
    sum += scores[i];
  }

  max = sum;

  for (let i = K; i < scores.length + K; i++) {
    sum += scores[i % N] - scores[(i - K) % N];
    max = Math.max(max, sum);
  }
  return max;
}

console.log(solution(input));
