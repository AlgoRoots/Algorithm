/**
 * @link https://www.acmicpc.net/problem/1522
 */

/**
 * 9:30 ~ 10"14
 */

const { defineInput, getInput } = require("#helper/input-config-helper");

const inputConfig = defineInput("custom", (v) => v.split(""));
const input = getInput(inputConfig);

function solution(chars) {
  const leng = chars.length;
  const aCnt = chars.filter((c) => c === "a").length;

  let min = Infinity;
  let bCnt = 0;
  for (let i = 0; i < aCnt; i++) {
    if (chars[i] === "b") bCnt++;
  }

  min = bCnt;
  for (let i = aCnt; i < leng - 1 + aCnt; i++) {
    if (chars[i % leng] === "b") {
      bCnt++;
    }

    if (chars[(i - aCnt + leng) % leng] === "b") {
      bCnt--;
    }
    min = Math.min(bCnt, min);
  }
  return min;
}

console.log(solution(input));
