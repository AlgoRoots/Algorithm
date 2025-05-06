/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 *
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [N, ...arr] = input;

  const sorted = arr.sort(([ax, ay], [bx, by]) => {
    if (ay !== by) {
      return ay - by;
    }
    return ax - bx;
  });

  return sorted.map((a) => a.join(" ")).join("\n");
}

console.log(solution(input));
