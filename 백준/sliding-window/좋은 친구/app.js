/**
 * @link https://www.acmicpc.net/problem/3078
 */

/**
 * 5:10~
 * 좋은 친구는 등수의 차이가 K보다 작거나 같으면서 이름의 길이가 같은 친구이다.
 * 첫째 줄에 좋은 친구가 몇 쌍이 있는지 출력한다.
 */

const { defineInput, getInput } = require("#helper/input-config-helper");

const inputConfig = defineInput("multiLine", (v, i) => {
  return i === 0 ? v.split(" ").map(Number) : v;
});

const input = getInput(inputConfig);

function solution(input) {
  const [[N, K], ...people] = input;

  return;
}

console.log(solution(input));
