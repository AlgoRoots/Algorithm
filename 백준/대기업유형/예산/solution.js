const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/2512
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "))
  .map((line) => line.map(Number));

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
