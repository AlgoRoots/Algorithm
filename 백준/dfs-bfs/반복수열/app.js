/**
 * @link https://www.acmicpc.net/problem/2331
 */

/**
 * [57, 74(=52+72=25+49), 65, 61, 37, 58, 89, 145, 42, 20, 4, 16, 37, …]
 *
 * 각 자리의 수의 p번 곱한 값의 합 > 반복
 * 반복되는 합이 나왔을 때, 그 전까지 계산이 몇 번 수행 되었는지.
 *
 * dfs로 순회하면서
 * count 증가시키고,
 * visited 생기면 멈추고 count 리턴
 */

const { createInput } = require("#helper/create-input");

const input = createInput().한줄(Number);

function solution(input) {
  const [start, p] = input;

  const visited = [];
  let target;

  const dfs = (start) => {
    visited.push(start);
    const numbers = start.toString().split("").map(Number);
    const calculated = numbers.reduce((acc, cur) => {
      return (acc += cur ** +p);
    }, 0);

    if (!visited.includes(calculated)) {
      dfs(calculated);
    } else {
      target = calculated;
    }
  };

  dfs(start);

  const targetIdx = visited.indexOf(target);

  console.log(targetIdx);
}

solution(input);
