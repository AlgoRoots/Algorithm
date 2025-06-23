/**
 * @link https://www.acmicpc.net/problem/1522
 */

const { createInput } = require("#helper/create-input");

const input = createInput().문자((v) => v.split(""));

function solution(input) {
  const totalA = input.filter((v) => v === "a").length;
  if (totalA === 0 || totalA === input.length) return 0;

  let maxAInWindow = 0;
  let curA = 0;

  for (let i = 0; i < totalA; i++) {
    if (input[i] === "a") curA++;
  }

  maxAInWindow = curA;

  for (let i = totalA; i < totalA + input.length; i++) {
    if (input[(i - totalA) % input.length] === "a") curA--;
    if (input[i % input.length] === "a") curA++;

    maxAInWindow = Math.max(maxAInWindow, curA);
  }
  console.log("maxAInWindow", maxAInWindow);
  return totalA - maxAInWindow;
}

console.log(solution(input));
