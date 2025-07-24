/**
 * @link https://www.acmicpc.net/problem/9549
 */

/**
 * 7:29 8:35
 * 비밀번호의 서로 다른 두 글자를 교환한다. 이 과정은 0번 또는 원하는 만큼 얼마든지 할 수 있다.
  1번 과정의 결과물 앞부분에 0개 혹은 그 이상의 문자를 삽입한다.
  2번 과정의 결과물 뒷부분에 0개 혹은 그 이상의 문자를 삽입한다.
 */

const { defineInput, getInput } = require("#helper/input-config-helper");

const inputConfig = defineInput("multiLine", (v, i) => {
  if (i === 0) return +v;
  return v;
});

const input = getInput(inputConfig);

function solution(input) {
  const [N, ...rest] = input;

  const cases = rest.reduce((acc, cur, i, org) => {
    if (i % 2 === 0) acc.push([cur, org[i + 1]]);
    return acc;
  }, []);

  const getAnswer = ([after, before]) => {
    const window = before.length;
    const orgCnt = Array(26).fill(0);
    const newCnt = Array(26).fill(0);
    for (let i = 0; i < window; i++) {
      orgCnt[before.charCodeAt(i) - 97]++;
      newCnt[after.charCodeAt(i) - 97]++;
    }

    let diff = 0;
    for (let i = 0; i < 26; i++) {
      if (newCnt[i] !== orgCnt[i]) diff++;
    }

    if (diff === 0) return "YES";

    for (let i = window; i < after.length; i++) {
      const inChar = after.charCodeAt(i) - 97;
      const outChar = after.charCodeAt(i - window) - 97;

      if (orgCnt[outChar] === newCnt[outChar]) diff++;
      newCnt[outChar]--;
      if (orgCnt[outChar] === newCnt[outChar]) diff--;

      if (orgCnt[inChar] === newCnt[inChar]) diff++;
      newCnt[inChar]++;
      if (orgCnt[inChar] === newCnt[inChar]) diff--;

      if (diff === 0) return "YES";
    }

    return "NO";
  };

  return cases.map(getAnswer).join("\n");
}

console.log(solution(input));
