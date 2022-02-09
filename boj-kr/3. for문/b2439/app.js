const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(+input[0]);

function solution(N) {
  let printString = "";

  for (let i = 1; i <= N; i++) {
    let stars = "*".repeat(i);
    let spaceCnt = " ".repeat(N - i);
    printString = spaceCnt + `${stars}`;
    console.log(printString);
  }
}
