const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/21921
 */

/**
 * 블로그 시작 N일 지남
 * X일동안 가장 많은 방문자수와 기간 출력
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "))
  .map((line) => line.map(Number));

function solution(input) {
  const [[N, X], visited] = input;

  let prev = 0;
  let max = 0;
  let period = 0;
  for (let day = 0; day + X <= N; day++) {
    let acc = visited[day];
    for (let cur = 1; cur < X; cur++) {
      acc += visited[day + cur];
    }
    prev = max;
    max = Math.max(max, acc);
    if (max > prev) period = 0;
    if (max === acc) period++;
  }

  if (max === 0) return "SAD";
  return [max, period].join("\n");
}

console.log(solution(input));
