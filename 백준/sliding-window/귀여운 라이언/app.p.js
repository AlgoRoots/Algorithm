/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 * 슬라이딩 윈도우 + 투 포인터 (O(N))
 */
const { defineInput, getInput } = require("#helper/input-config-helper");

const inputConfig = defineInput("multiLineSpace", (v) => +v);

const input = getInput(inputConfig);

function solution(input) {
  const [[N, K], toys] = input;

  const ones = toys.map((v, i) => (v === 1 ? i : -1)).filter((v) => v !== -1);
  if (ones.length < K) return -1;

  let minLen = Infinity;

  for (let i = 0; i <= ones.length - K; i++) {
    console.log("i", i, i + K - 1);
    const left = ones[i];
    const right = ones[i + K - 1];
    console.log(left, right);
    minLen = Math.min(minLen, right - left + 1);
  }

  return minLen;
}

console.log(solution(input));
