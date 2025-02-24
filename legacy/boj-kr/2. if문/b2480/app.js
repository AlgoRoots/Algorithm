const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let dice = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

// const [a, b, c] = dice;
// let cnt = 0;

// for (let x of input) if (x === b) cnt++;
// const arr = [c, b + 10, b * 10 + 100];

// console.log(arr[cnt - 1] * 100);

const [A, B, C] = dice;
console.log([A, B, C]);

if (A === B && B === C) {
  console.log(10000 + A * 1000);
} else if (A === B || B === C) {
  console.log(1000 + B * 100);
} else {
  console.log(C * 100);
}
