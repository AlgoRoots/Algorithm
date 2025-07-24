const { defineInput, getInput } = require("#helper/input-config-helper");

const inputConfig = defineInput("multiLineSpace", (v) => +v);

const input = getInput(inputConfig);
function solution(input) {
  const [[N, K], ...list] = input;

  const maxX = 1_000_000;
  const range = 2 * K + 1;

  const ice = Array(maxX + 1).fill(0);
  for (const [g, x] of list) {
    ice[x] += g;
  }

  let sum = 0;
  for (let i = 0; i < range; i++) {
    sum += ice[i];
  }

  console.log("sum", sum, range);

  let max = sum;
  // 슬라이딩 윈도우
  for (let i = range; i <= maxX; i++) {
    sum += ice[i] - ice[i - range];
    if (sum > max) max = sum;
  }

  console.log(max);
}

console.log(solution(input));
