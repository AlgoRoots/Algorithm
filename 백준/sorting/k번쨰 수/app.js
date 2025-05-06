/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 *
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[n, k], arr] = input;
  return arr.sort((a, b) => a - b)[k - 1];
}

console.log(solution(input));
