const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/2750
 */

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, ...arr] = input;
  return arr.sort((a, b) => a - b).join("\n");
}

console.log(solution(input));
