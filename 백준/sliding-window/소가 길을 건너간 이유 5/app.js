/**
 * @link https://www.acmicpc.net/problem/14465
 */

/**
 * 6:25
 * 1 2 3 4 5 6 7 8 9 10
 * 0 0 1 1 0 1 1 1 0 0
 */

const { defineInput, getInput } = require("#helper/input-config-helper");

const inputConfig = defineInput("multiLine", (v, i) => {
  if (i === 0) return v.split(" ").map(Number);
  return +v;
});
const input = getInput(inputConfig);

function solution(input) {
  const [[N, K, B], ...brokenIds] = input;

  const brokenIdSet = new Set(brokenIds);

  const trafficLight = Array.from({ length: N }, (v, i) => {
    if (brokenIdSet.has(i + 1)) return 0;
    return 1;
  });

  let sum = 0;
  let min = Infinity;
  for (let i = 0; i < K; i++) {
    sum += trafficLight[i];
  }

  min = K - sum;

  for (let i = K; i < N; i++) {
    sum += trafficLight[i] - trafficLight[i - K];
    min = Math.min(K - sum, min);
  }

  return min;
}

console.log(solution(input));
