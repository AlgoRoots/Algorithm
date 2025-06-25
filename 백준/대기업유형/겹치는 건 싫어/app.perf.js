/**
 * @link https://www.acmicpc.net/problem/20922
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N, K], sequence] = input;

  let map = new Map();
  let left = 0,
    right = 0;
  let leng = 0;

  while (right < N) {
    const n = sequence[right];

    map.set(n, (map.get(n) || 0) + 1);

    while (map.get(n) > K) {
      const leftNum = sequence[left];
      map.set(leftNum, map.get(leftNum) - 1);
      left++;
    }
    leng = Math.max(leng, right - left + 1);

    right++;
  }
  return leng;
}

console.log(solution(input));
