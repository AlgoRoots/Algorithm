const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// console.log('input: ', input);
const testCaseArray = [];

for (let i = 1; i <= +input[0]; i++) {
  const tempValue = input[i].split(" ").map((item) => +item);
  testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}
//console.log(testCaseArray);
solution(+input[0], testCaseArray);

function solution(T, testcaseArray) {
  for (let i = 0; i < T; i++) {
    const A = testCaseArray[i].A;
    const B = testCaseArray[i].B;
    console.log(A + B);
  }
}
