const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/2164
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution([N]) {
  let queue = Array.from({ length: N }, (v, i) => i + 1);
  let cnt = 0;
  while (store.length !== 1) {
    const [n, ...rest] = store;
    if (cnt % 2 === 0) store = rest;
    else store = [...rest, n];
    cnt++;
  }

  return store[0];
}

console.log(solution(input));
