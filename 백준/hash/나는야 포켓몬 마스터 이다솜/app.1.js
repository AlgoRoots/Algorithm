/**
 * @link https://www.acmicpc.net/problem/1620
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄((v, i) =>
  i === 0 ? v.split(" ").map(Number) : v
);

function solution(input) {
  const [[N, M], ...rest] = input;
  const order = rest.slice(0, N);
  const questions = rest.slice(N);

  const res = [];
  for (let i = 0; i < M; i++) {
    const v = questions[i];
    const isNumber = (v) => !isNaN(+v);
    if (isNumber(v)) {
      res.push(order[+v - 1]);
    } else {
      res.push(order.indexOf(v) + 1);
    }
  }
  return res.join("\n");
}

console.log(solution(input));
