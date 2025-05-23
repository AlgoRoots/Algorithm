const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 *
 */

const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(input) {
  const [A, P] = input;

  const sum = (str) => {
    return String(str)
      .split("")
      .reduce((acc, cur) => (acc += cur ** P), 0);
  };

  const visited = Array.from({ length: 9999 }, () => 0);

  const dp = (start, path = [start]) => {
    if (visited[start]) {
      return path.indexOf(start);
    } else {
      visited[start] = true;
      const next = sum(start);
      return dp(next, [...path, next]);
    }
  };

  return dp(+A);
}

console.log(solution(input));
