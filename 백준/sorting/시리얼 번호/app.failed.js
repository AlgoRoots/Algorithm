/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 * @failed
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄();

function solution(input) {
  const [N, ...arr] = input;
  const sum = (str) =>
    [...str.replace(/\D/g, "")].reduce((acc, cur) => acc + +cur, 0);

  const sorted = arr.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    const aNums = sum(a);
    const bNums = sum(b);

    if (aNums !== bNums) return aNums - bNums;
    return a.localeCompare(b);
  });

  return sorted.join("\n");
}

console.log(solution(input));
