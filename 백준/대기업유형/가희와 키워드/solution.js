const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/22233
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v, i) => {
    if (i === 0) return v.split(" ").map(Number);
    return v;
  });

function solution(input) {
  const [[N, M], ...rest] = input;
  const memo = new Set(rest.slice(0, N));
  const posts = rest.slice(-M).map((v, i) => v.split(","));

  const res = [];
  for (const keywords of posts) {
    for (const k of keywords) {
      if (memo.has(k)) {
        memo.delete(k);
      }
    }
    res.push(memo.size);
  }
  return res.join("\n");
}

console.log(solution(input));
