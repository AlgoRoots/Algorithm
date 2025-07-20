/**
 * @link https://www.acmicpc.net/problem/12847
 * sliding window
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[n, m], wages] = input;

  let sum = 0;

  //init
  for (let i = 0; i < m; i++) {
    sum += wages[i];
  }

  let max = sum;

  for (let i = m; i < n; i++) {
    sum += wages[i] - wages[i - m];
    max = Math.max(max, sum);
  }

  return max;
}

console.log(solution(input));
