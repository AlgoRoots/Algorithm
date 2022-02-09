const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const testCaseArray = [];

// for (let i = 0; ; i++) {
//   const tempValue = input[i].split(" ").map((item) => +item);
//   console.log(tempValue);
// }

let length = input.length;
let cnt = 0;

while (length > 0) {
  let testCaseValue = input[cnt].split(" ").map(Number);
  let A = testCaseValue[0];
  let B = testCaseValue[1];

  console.log(A + B);
  cnt++;
  length--;
}
