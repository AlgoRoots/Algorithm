const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCount = +input[0];
const testCases = input.slice(1);
//console.log(testCases);
//console.log(testCases[1][2]);

solution(testCount, testCases);

function solution(testCount, testCases) {
  for (let i = 0; i < testCount; i++) {
    const oxList = testCases[i];
    let count = 0;
    let score = 0;
    for (let j = 0; j < oxList.length; j++) {
      if (oxList[j] === "O") {
        count++;
        score = score + count;
      } else {
        count = 0;
      }
    }
    console.log(score);
  }
}
