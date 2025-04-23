/**
 * @link https://www.acmicpc.net/problem/5073
 * @구현
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

const TYPES = {
  3: "Equilateral",
  2: "Isosceles",
  1: "Scalene",
  Invalid: "Invalid",
};

const isTriangle = (numbers) => {
  const max = Math.max(...numbers);
  const maxIdx = numbers.indexOf(max);

  const sumRest = numbers
    .filter((n, idx) => idx !== maxIdx)
    .reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);

  return max < sumRest;
};

const getMatchCount = (numbers) => {
  const matches = numbers.map((target) => {
    const match = numbers.filter((n) => n === target);
    return match.length;
  });

  return Math.max(...matches);
};

function solution(input) {
  const cases = input.slice(0, -1);

  const result = cases.map((numbers) => {
    if (isTriangle(numbers)) {
      const count = getMatchCount(numbers);
      return TYPES[count];
    } else {
      return TYPES.Invalid;
    }
  });

  console.log(result.join("\n"));
}

solution(input);
