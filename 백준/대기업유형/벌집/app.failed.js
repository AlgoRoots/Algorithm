/**
 * @link https://www.acmicpc.net/problem/2292
 */

/**
 * @failed
 */

const { createInput } = require("#helper/create-input");

const input = createInput().문자();

// 1 > 4 > 13 > 28 > 49
//   3   9   15   21
// 1  5  14  29  50
//  4   9   15   21

// 1  3  12  26  46
//  2  9   14   20
// 1 2 9 22
//  1 7 13
// 1 6 17 34 57
//  5 11  17  23

// 1 > 1     1
// 2~7 > 2   6
// 8~19 > 3  12
// 20 ~ 37 > 4 18
// 38 ~  61  > 5  24

function solution(input) {
  console.log("input", input);
  let start = 1;
  let end = 1;
  let count = 1;
  while (input > end) {
    start = end + 1; //2
    end = 6 * count + start - 1; // 6 *1) +1 //7
    count++;
  }
  console.log(count);
}

solution(input);
