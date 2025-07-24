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
  const [[N, K], toys] = input;
  const ryans = toys.filter((v) => v === 1).length;
  if (K > ryans) return -1;

  for (let window = K; window < N; window++) {
    let cnt = 0;
    for (let i = 0; i < window; i++) {
      if (toys[i] === 1) cnt++;
    }

    for (let i = window; i < N; i++) {
      if (toys[i] === 1) cnt++;
      if (toys[i - window] === 1) cnt--;
    }
    if (cnt === K) return window;
  }
}

console.log(solution(input));
