/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 * 문자열의 뒤에 A를 추가한다.
 * 문자열의 뒤에 B를 추가하고 문자열을 뒤집는다.
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄();

function solution(input) {
  const [S, T] = input;

  let result = 0;

  const dfs = (cur) => {
    if (cur.length < S.length) return;
    if (cur === S) {
      result = 1;
      return;
    }

    if (cur.endsWith("A")) dfs(cur.slice(0, -1));
    if (cur.startsWith("B")) dfs([...cur.slice(1)].reverse().join(""));
  };

  dfs(T);
  return result;
}

console.log(solution(input));
