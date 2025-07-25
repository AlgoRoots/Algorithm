/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 * 11:45
 */

const { defineInput, getInput } = require("#helper/input-config-helper");

const inputConfig = defineInput("multiLineSpace", (v) => +v);

const input = getInput(inputConfig);

function solution(input) {
  const [[N, L], info] = input;

  const include = (sum) => {
    const val = sum * 0.001;
    return val >= min && val <= max;
  };

  const extra = Array(L - 1).fill(0);
  const amounts = [...extra, ...info];

  const min = 0.129;
  const max = 0.138;

  let sum = 0;
  let cnt = 0;

  for (let i = 0; i < L; i++) {
    sum += amounts[i];
  }
  if (include(sum)) cnt++;

  for (let i = L; i < N + L - 1; i++) {
    sum += amounts[i] - amounts[i - L];

    if (include(sum)) cnt++;
  }

  return cnt;
}

console.log(solution(input));
