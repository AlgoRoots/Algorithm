const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/1157
 */

/**
 *
 */

const input = fs.readFileSync(filePath).toString().trim();

// 1, 4 13
// 1 //1개
// 2 3 4 5 6 7 //6개
// 8 9 10 11 12 13 14 15 16 17 18 19//12
// 8~19  12개
// 19 ~ 37 > 18개  6*3 ~ 6*6
function solution(input) {
  let end = 1;
  let count = 1;
  for (let i = 1; end < +input; i++) {
    end += i * 6;
    count++;
  }
  return count;
}

console.log(solution(input));
