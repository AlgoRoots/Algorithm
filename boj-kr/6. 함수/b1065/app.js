const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// const N = +input[0];

// solution(N);

// function f(num) {
//   const strNum = String(num);
//   if (strNum.length <= 2) {
//     return true;
//   }
//   const subtract = +strNum[1] - +strNum[0];
//   let beforeNum = +strNum[1];
//   for (let i = 2; i < strNum.length; i++) {
//     if (strNum[i] - beforeNum !== subtract) {
//       return false;
//     }
//     beforeNum = +strNum[i];
//   }
//   return true;
// }

// function solution(N) {
//   let cnt = 0;
//   for (let i = 1; i <= N; i++) {
//     if (f(i)) {
//       cnt++;
//     }
//   }
//   console.log(cnt);
// }

const n = +input;
console.log(n);

const arr = new Array(n + 1).fill(true);
console.log(arr);

for (let i = 0; i < n + 1; i++) {
  const numList = String(i).split("");
  console.log(numList);
  if (numList < 3) {
    continue;
  } else {
    const d = numList[1] - numList[0];
    for (let j = 1; j < numList.length - 1; j++) {
      if (d !== numList[j + 1] - numList[j]) {
        arr[i] = false;
        break;
      }
    }
  }
}
console.log(arr.filter((is) => is).length - 1);
