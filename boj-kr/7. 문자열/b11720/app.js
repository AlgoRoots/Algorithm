const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0];
const num = input[1].split("").map(Number);

soulution(N, num);

function soulution(N, numArr) {
  let sum = 0;
  numArr.forEach((element) => {
    sum += element;
  });

  console.log(sum);
}
