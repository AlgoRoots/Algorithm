/**
 * @link https://www.acmicpc.net/problem/2559
 */

/** 5:45 5:50
 *
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N, K], list] = input;

  let max = 0;
  let sum = 0;

  for (let i = 0; i < K; i++) {
    sum += list[i];
  }

  max = sum;

  for (let i = K; i < N; i++) {
    sum += list[i] - list[i - K];
    max = Math.max(max, sum);
  }

  return max;
}

console.log(solution(input));
