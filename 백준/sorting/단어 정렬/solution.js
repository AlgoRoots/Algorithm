const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/1181
 */

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, ...arr] = input;

  const sorted = [...new Set(arr)].sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    return a.localeCompare(b);
  });
  return sorted.join("\n");
}

console.log(solution(input));
