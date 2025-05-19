const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 * 점수의 개수 P
 * 10<=p<=50
 * 리스트에 있는 점수 N개
 * 0<= n <=p
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "))
  .map((line) => line.map(Number));

function solution(input) {
  const [[N, newScore, P], ranks = []] = input;

  if (N === 0) return 1;
  if (N === P && ranks[P - 1] >= newScore) return -1;

  let score = 1;

  for (let i = 0; i < N; i++) {
    if (ranks[i] > newScore) score++;
  }
  return score;
}

console.log(solution(input));
