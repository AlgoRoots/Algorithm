const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("");

function solution(chars) {
  const leng = chars.length;
  const aCnt = chars.filter((c) => c === "a").length;

  let min = Infinity;
  let bCnt = 0;
  for (let i = 0; i < aCnt; i++) {
    if (chars[i] === "b") bCnt++;
  }

  min = bCnt;
  for (let i = aCnt; i < leng - 1 + aCnt; i++) {
    if (chars[i % leng] === "b") {
      bCnt++;
    }

    if (chars[(i - aCnt + leng) % leng] === "b") {
      bCnt--;
    }
    min = Math.min(bCnt, min);
  }
  return min;
}

console.log(solution(input));
