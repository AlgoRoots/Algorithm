const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

/**
 * @link https://www.acmicpc.net/problem/1522
 */


const input = fs.readFileSync(filePath).toString().trim().map((v) => v.split(""));

function solution(input) {
  console.log("input", input);
}

console.log(solution(input));