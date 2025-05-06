/**
 * @link https://www.acmicpc.net/problem/2750
 */

/**
 *
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄();

function solution(input) {
  const [N, ...arr] = input;
  return arr.sort((a, b) => a - b).join("\n");
  console.log("arr", arr);
}

console.log(solution(input));
