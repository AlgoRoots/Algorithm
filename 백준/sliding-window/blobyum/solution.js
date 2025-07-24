const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "))
  .map((line) => line.map((v) => +v));

function solution(input) {
  const [[N, K], scores] = input;

  let max = 0;
  let sum = 0;
  for (let i = 0; i < K; i++) {
    sum += scores[i];
  }

  max = sum;

  for (let i = K; i < scores.length + K; i++) {
    sum += scores[i % N] - scores[(i - K) % N];
    max = Math.max(max, sum);
  }
  return max;
}

console.log(solution(input));
