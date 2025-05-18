/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 * 모음(a,e,i,o,u) 하나를 반드시 포함하여야 한다.
 * 모음이 3개 혹은 자음이 3개 연속으로 오면 안 된다.
 * 같은 글자가 연속적으로 두번 오면 안되나, ee 와 oo는 허용한다.
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄();

const gathers = ["a", "e", "i", "o", "u"];
const consecutiveAllowChar = ["e", "o"];

function solution(input) {
  const list = input.filter((v) => v !== "end");
  const checkGather = (input) => input.some((v) => gathers.includes(v));

  const duplicated = (input, maxCnt) => {
    const res = [];
    for (let i = 0; i < input.length; i++) {
      const v = input[i];
      let cnt = 1;
      for (let j = i + 1; j < input.length; j++) {
        const next = input[j];
        if (v !== next) break;
        cnt++;
      }
      res.push(cnt);
    }
    return { res, maxChecked: Math.max(...res) < maxCnt, maxCnt, input };
  };

  const checkSpecialCons = (dup) => {
    if (dup.maxChecked) return true;
    return dup.res.some(
      (v, i) => v >= dup.maxCnt && consecutiveAllowChar.includes(dup.input[i])
    );
  };

  const mapChar = (input) =>
    input.map((v) => {
      if (gathers.includes(v)) return "gather";
      return "consecutive";
    });

  const isVerified = (input) => {
    const chars = input.split("");
    const a = checkGather(chars);
    const b = duplicated(mapChar(chars), 3).maxChecked;
    const c = checkSpecialCons(duplicated(chars, 2));

    return a && b && c;
  };

  const res = list.map((v) => {
    if (isVerified(v)) return `<${v}> is acceptable.`;
    return `<${v}> is not acceptable.`;
  });

  return res.join("\n");
}

console.log(solution(input));
