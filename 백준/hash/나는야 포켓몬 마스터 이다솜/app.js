/**
 * @link https://www.acmicpc.net/problem/
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄((v, i) =>
  i === 0 ? v.split(" ").map(Number) : v
);

function solution(input) {
  const [[N, M], ...rest] = input;
  const order = rest.slice(0, N);
  const questions = rest.slice(N);
}

console.log(solution(input));
