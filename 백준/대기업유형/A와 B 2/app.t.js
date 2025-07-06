/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 * 문자열의 뒤에 A를 추가한다.
 * 문자열의 뒤에 B를 추가하고 문자열을 뒤집는다.
 * 5:37
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄();

function solution(input) {
  const [S, T] = input;
  let pivot = 0;

  const addA = (s) => s + "A";
  const addB = (s) => s + "B";
  const reverseCheck = (s) => {
    let match = true;
    let checked = pivot;

    for (let i = s.length - 1; i >= checked; i--, checked++) {
      if (s[i] !== T[checked]) {
        match = false;
        break;
      }
    }
    if (match) pivot = checked + 1;
    return match;
  };

  const check = (s) => {
    let match = true;
    let checked = pivot;

    for (let i = checked; i < s.length; i++, checked++) {
      if (s[i] !== T[checked]) {
        match = false;
        break;
      }
    }
    if (match) pivot = checked + 1;

    return match;
  };

  const cases = (str) => {
    const a = addA(str);
    const b = addB(str); //ab
    const res = [];
    if (check(a)) res.push(a);
    if (reverseCheck(b)) res.push(b);

    console.log("res", res);
    return res;
  };

  const find = (cur) => {
    for (const next of cases(cur)) {
      console.log("!!!next", next);
      if (next.length < T.length) {
        find(next);
      }
      if (next.length === T.length) {
        console.log("@@@@@@@@@@@@@", next, pivot);
      }
    }
  };

  find(S);

  console.log("input", input);
}

console.log(solution(input));
