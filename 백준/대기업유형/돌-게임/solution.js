const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/9655
 */

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  const N = +input;

  N % 2 === 1 ? console.log("SK") : console.log("CY");
}

solution(input);
