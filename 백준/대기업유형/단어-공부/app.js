/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 *
 */

const { createInput } = require("#helper/create-input");

const input = createInput().문자();

function solution(input) {
  const chars = input.toLowerCase().split("");

  if (chars.length === 1) {
    return console.log(chars[0].toUpperCase());
  }

  const set = new Set(chars);

  const res = [...set].reduce((acc, char) => {
    const count = chars.filter((c) => c === char).length;

    acc[char] = count;
    return acc;
  }, {});

  const max = Math.max(...Object.values(res));
  const maxList = Object.entries(res).filter(([k, v]) => v === max);

  if (maxList.length > 1) {
    console.log("?");
  } else {
    const [k, v] = maxList.flat();
    console.log(k.toUpperCase());
  }
}

solution(input);
