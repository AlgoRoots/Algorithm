const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/
 */

/**
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
  const [N, ...arr] = input;

  const sorted = arr.sort(([ax, ay], [bx, by]) => {
    if (ay !== by) {
      return ay - by;
    }
    return ax - bx;
  });

  return sorted.map((a) => a.join(" ")).join("\n");
}

console.log(solution(input));
