const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v, i) => {
    if (i === 0) return v.split(" ").map(Number);
    return +v;
  });

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
