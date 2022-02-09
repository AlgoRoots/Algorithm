const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(N) {
  let sum = 0;
  let cycle = 0;

  while (input !== N || cycle === 0) {
    sum = Math.floor(N / 10) + (N % 10);
    N = (N % 10) * 10 + (sum % 10);
    cycle++;

    if (+input === N) {
      break;
    }
  }
  console.log(cycle);
}
