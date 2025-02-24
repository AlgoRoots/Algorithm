const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCount = +input[0];
const tests = input[1].split(" ").map(Number);

solution(testCount, tests);

function solution(testCount, tests) {
  tests.sort((a, b) => b - a);
  let highScore = tests[0];
  let newScore = new Array();

  for (let i = 0; i < testCount; i++) {
    newScore.push((tests[i] / highScore) * 100);
  }
  let sum = 0;
  for (let i = 0; i < testCount; i++) {
    sum += newScore[i];
  }

  console.log(sum / testCount);
}
