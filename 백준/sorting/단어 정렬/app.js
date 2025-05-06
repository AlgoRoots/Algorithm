/**
 * @link https://www.acmicpc.net/problem/1181
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄();

function solution(input) {
  const [N, ...arr] = input;

  const sorted = [...new Set(arr)].sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    return a.localeCompare(b);
  });
  return sorted.join("\n");
}

console.log(solution(input));
