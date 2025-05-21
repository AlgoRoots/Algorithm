/**
 * @link https://www.acmicpc.net/problem/2512
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N], budget, [M]] = input;

  const sum = (nums) => nums.reduce((acc, cur) => (acc += cur), 0);

  if (sum(budget) <= M) return Math.max(...budget);

  let max = Math.floor(M / N);
  while (true) {
    let total = 0;
    for (let i = 0; i < budget.length; i++) {
      if (budget[i] <= max) total += budget[i];
      else total += max;
    }
    if (total <= M) max++;
    else return max - 1;
  }
}

console.log(solution(input));
