const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v, i) => {
    if (i === 0) return +v;
    return v;
  });

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
