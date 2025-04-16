/**
 * @link https://www.acmicpc.net/problem/23971
 */

const { createInput } = require("#helper/create-input");

const input = createInput().한줄(Number);

function solution(input) {
  // 행, 개,  세로, 가로
  const [H, W, N, M] = input;
  let count = 0;

  const row = Math.ceil(H / (N + 1));
  const col = Math.ceil(W / (M + 1));

  console.log(row * col);
}

solution(input);
