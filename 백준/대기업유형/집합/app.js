/**
 * @link https://www.acmicpc.net/problem/11723
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기();

function solution(input) {
  const [N, ...calculations] = input;
  let S = new Set();
  calculations.forEach(([calc, v], idx) => {
    const n = +v;
    switch (calc) {
      case "add":
        S.add(n);
        break;
      case "remove":
        S.delete(n);
        break;
      case "check":
        S.has(n) ? console.log(1) : console.log(0);
        break;
      case "toggle":
        S.has(n) ? S.delete(n) : S.add(n);
        break;
      case "all":
        S = new Set(Array.from({ length: 20 }, (n, idx) => idx + 1));
        break;
      case "empty":
        S.clear();
        break;
    }
  });
}

solution(input);
