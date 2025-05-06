/**
 * @link https://www.acmicpc.net/problem/1572
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N, K], ...arr] = input;

  const count = N - K + 1;
  const sequence = [];
  for (let i = 0; i < count; i++) {
    const list = arr[i]; // [3]
    for (let j = i + 1; j < K + i; j++) {
      list.push(...arr[j]);
    }
    const sorted = list.sort((a, b) => a - b);
    // 중앙값  (N+1)/2
    const mid = Math.floor((list.length + 1) / 2);
    sequence.push(sorted[mid - 1]);
  }

  return sequence.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(input));
