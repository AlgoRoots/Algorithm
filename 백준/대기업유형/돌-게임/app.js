/**
 * @link https://www.acmicpc.net/problem/9655
 */

/**
 *
 */

const { createInput } = require("#helper/create-input");

const input = createInput().문자();
// s c s c s c
// 1 1 1 1 1
// 3 1 1
// 3 1
// 6
// 1 3 1 1
// 3 3
// 1 1 1 1 1 1
// 1 1 3 1
// 7
// 1 1 1 1 1 1 1
// 1 3 3
//
function solution(input) {
  const N = +input;
  console.log("N", N);

  if (N % 2 === 1) {
    console.log("SK");
  } else {
  }

  N % 2 === 1 ? console.log("SK") : console.log("CY");
}

solution(input);
