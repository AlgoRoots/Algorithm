/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 * 11:46 ~ 12:03
 */
const { defineInput, getInput } = require("#helper/input-config-helper");

const inputConfig = defineInput("multiLineSpace", (v) => +v);

const input = getInput(inputConfig);

function solution(input) {
  const [[N, K], toys] = input;
  const ryans = toys.filter((v) => v === 1).length;
  if (K > ryans) return -1;

  for (let window = K; window < N; window++) {
    let cnt = 0;
    for (let i = 0; i < window; i++) {
      if (toys[i] === 1) cnt++;
    }

    for (let i = window; i < N; i++) {
      if (toys[i] === 1) cnt++;
      if (toys[i - window] === 1) cnt--;
    }
    if (cnt === K) return window;
  }
}

console.log(solution(input));
