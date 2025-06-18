/**
 * @link https://www.acmicpc.net/problem/1138
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N], list] = input;

  const res = [];

  for (let i = N - 1; i >= 0; i--) {
    const n = list[i];
    res.splice(n, 0, i + 1);
  }

  return res.join(" ");
}

console.log(solution(input));
