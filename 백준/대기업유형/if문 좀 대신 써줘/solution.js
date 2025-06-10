const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/19637
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

function solution(input) {
  const [[N, M], ...rest] = input;
  const combatPowers = rest.slice(0, N);
  const powers = rest.slice(N);

  const binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      const [key, cur] = arr[mid];
      if (+cur >= val) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return arr[left][0];
  };

  const named = powers.map((p, i) => binarySearch(combatPowers, +p));
  return named.join("\n");
}

console.log(solution(input));
