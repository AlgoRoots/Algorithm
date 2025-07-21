const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/29718
 */

/**
 * 6:06 ~ 6:24
 * 4 10 4 12
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "))
  .map((line) => line.map(Number));

function solution(input) {
  const [[N, M], ...rest] = input;
  const info = rest.slice(0, N);
  const [A] = rest.at(-1);

  let max = 0;
  let sum = 0;

  for (let x = 0; x < A; x++) {
    for (let y = 0; y < N; y++) {
      sum += info[y][x];
    }
  }

  max = sum;

  for (let x = A; x < M; x++) {
    for (let y = 0; y < N; y++) {
      sum += info[y][x] - info[y][x - A];
    }
    max = Math.max(sum, max);
  }

  return max;
}

console.log(solution(input));
