/**
 * @link https://www.acmicpc.net/problem/12891
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기();

function solution(input) {
  const [[S, P], [chars], [A, C, G, T]] = input;

  const substrObj = { A: +A, C: +C, G: +G, T: +T };
  let cnt = 0;

  // init
  for (let i = 0; i < +P; i++) {
    substrObj[chars[i]] -= 1;
  }

  if (Object.values(substrObj).every((v) => v <= 0)) cnt++;

  for (let i = +P; i < chars.length; i++) {
    substrObj[chars[i]] -= 1;
    substrObj[chars[i - +P]] += 1;
    if (Object.values(substrObj).every((v) => v <= 0)) cnt++;
  }
  return cnt;
}

console.log(solution(input));
