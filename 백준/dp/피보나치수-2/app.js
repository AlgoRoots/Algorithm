/**
 * @link https://www.acmicpc.net/problem/2748
 */

const { createInput } = require("#helper/create-input");

const input = createInput().한줄(Number);

function solution(input) {
  const [N] = input;

  const fib = (n) => {
    if (n <= 2) return 1n;
    let table = [0n, 1n, 1n];
    for (let i = 3; i <= n; i++) {
      table[i] = table[i - 1] + table[i - 2];
    }
    return table[n];
  };

  console.log(fib(N).toString());
}

solution(input);
