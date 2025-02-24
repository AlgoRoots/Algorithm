const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

item = input.map((item) => +item);

const A = item[0];
const B = item[1];
const C = item[2];

solution();

// function solution() {
//   let multiplication = String(A * B * C);
//   const answer = Array(10).fill(0);
//   console.log("multiplication: ", multiplication);
//   for (let i = 0; i < multiplication.length; i++) {
//     const nowChar = +multiplication[i];
//     console.log(nowChar);
//     answer[nowChar]++;
//   }
//   console.log(answer);
// }

function solution() {
  let multiplication = String(A * B * C);

  for (let i = 0; i <= 9; i++) {
    // console.log(multiplication.split(i).length - 1);
    let count = 0;

    for (let j = 0; j < multiplication.length; j++) {
      if (Number(multiplication[j]) === i) {
        count++;
      }
    }
    console.log(count);
  }
}
