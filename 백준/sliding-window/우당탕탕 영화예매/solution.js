const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/29700

/**
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((s, i) => {
    if (i === 0) return s.split(" ").map(Number);
    return s.split("").map(Number);
  });

function solution(input) {
  const [[N, M, K], ...status] = input;

  let totalCnt = 0;
  const getAvailableCnt = (line) => {
    let cnt = 0;
    let sum = 0;

    // init
    for (let i = 0; i < K; i++) {
      sum += line[i];
    }

    if (sum === 0) cnt++;

    for (let i = K; i < M; i++) {
      sum += line[i] - line[i - K];
      if (sum === 0) cnt++;
    }
    return cnt;
  };

  status.forEach((line, i) => {
    totalCnt += getAvailableCnt(line);
  });
  return totalCnt;
}

console.log(solution(input));
