/**
 * @link https://www.acmicpc.net/problem/2512
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N], budget, [M]] = input;

  let left = 0;
  let right = Math.max(...budget);
  let answer = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let total = budget.reduce((sum, cur) => sum + Math.min(cur, mid), 0);

    if (total <= M) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

console.log(solution(input));
