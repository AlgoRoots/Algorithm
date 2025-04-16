const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/23971
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(input) {
  // 행, 개,  세로, 가로
  const [H, W, N, M] = input;
  let count = 0;

  for (let i = 1; i <= H; i += N + 1) {
    for (let j = 1; j <= W; j += M + 1) {
      count++;
    }
  }

  console.log(count);
}

solution(input);
