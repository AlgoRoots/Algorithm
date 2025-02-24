const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(+input[0]);

// function solution(N) {
//   // 별
//   for (let line = 1; line <= N; line++) {
//     const starCnt = line;
//     const spaceCnt = N - line;
//     let printString = "";
//     for (let i = 0; i < starCnt; i++) {
//       printString += "*";
//     }

//     for (let i = 0; i < spaceCnt; i++) {
//       printString += " ";
//     }
//     console.log(printString);
//   }
// }

function solution(N) {
  let printString = "";

  for (let i = 1; i <= N; i++) {
    let starCnt = "*".repeat(i);
    let spaceCnt = " ";
    printString = `${starCnt}` + spaceCnt;
    console.log(printString);
  }
}
