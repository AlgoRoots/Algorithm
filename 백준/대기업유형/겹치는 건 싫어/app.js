/**
 * @link https://www.acmicpc.net/problem/20922
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N, K], sequence] = input;

  let map = new Map();
  let left = 0;
  let right = 0;
  let leng = 0;

  while (right < N) {
    const n = sequence[right];
    if (map.get(n) === K - 1) {
      leng = Math.max(leng, right - left);
      left += 1;
      right = left;
      map = new Map();
      continue;
    }
    if (!map.has(n)) map.set(n, 0);
    else map.set(n, map.get(n) + 1);
    right++;
  }
  leng = Math.max(leng, right - left);
  return leng;
}

console.log(solution(input));
