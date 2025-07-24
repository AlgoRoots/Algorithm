/**
 * @link https://www.acmicpc.net/problem/20437
 */

/**
 * 2:37 ~
 * sliding window
 * 
 * 알파벳 소문자로 이루어진 문자열 W가 주어진다.
양의 정수 K가 주어진다.
어떤 문자를 정확히 K개를 포함하는 가장 짧은 연속 문자열의 길이를 구한다.
어떤 문자를 정확히 K개를 포함하고, 문자열의 첫 번째와 마지막 글자가 해당 문자로 같은 가장 긴 연속 문자열의 길이를 구
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄();

function solution(input) {
  const [T, ...rest] = input;
  const cases = rest.reduce((acc, cur, i, org) => {
    if (i % 2 === 0) {
      acc = [...acc, [cur, +org[i + 1]]];
    }
    return acc;
  }, []);

  const find = (chars, k) => {
    console.log(chars, k);

    const charObj = [...new Set(chars)].reduce((acc, char) => {
      acc[char] = [];
      return acc;
    }, {});

    for (let i = 0; i < chars.length; i++) {
      charObj[chars[i]].push(i);
    }

    let min = Infinity;
    let max = 0;

    for (const [char, pos] of Object.entries(charObj)) {
      if (pos.length < k) continue;

      for (let i = 0; i <= pos.length - k; i++) {
        const start = pos[i];
        const end = pos[i + k - 1];
        const len = end - start + 1;
        min = Math.min(len, min);
        max = Math.max(len, max);
      }
    }

    return min === Infinity ? -1 : `${min} ${max}`;
  };

  cases.forEach((c) => {
    console.log(find(c[0], c[1]));
  });
}

console.log(solution(input));
