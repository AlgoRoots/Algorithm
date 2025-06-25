/**
 * @link https://www.acmicpc.net/problem/17615
 */

/**
 *
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄((v, i) => (i === 0 ? +v : v.split("")));

function solution(input) {
  const [n, balls] = input;
  const totalRed = balls.filter((v) => v === "R").length;
  const totalBlue = n - totalRed;

  // 하나의 색만 있는 경우
  if (n === totalBlue || n === totalRed) return 0;

  let min = 0,
    curR = 0,
    curB = 0;

  for (let i = 0; i < totalRed; i++) {
    if (balls[i] === "R") curR++;
  }

  curB = totalRed - curR;

  // 이미 정렬되어있는 경우
  if (curR === totalRed || curB === totalBlue) return 0;

  // 더 적은게 key가 됨
  let key = Math.max(curR, curB) === curR ? "B" : "R";

  console.log("key", key);
  console.log("curR", curR, curB);

  console.log("input", input);
}

console.log(solution(input));
