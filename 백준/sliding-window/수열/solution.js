const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/2559
 */

/** 5:45
 *
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "))
  .map((line) => line.map(Number));

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
