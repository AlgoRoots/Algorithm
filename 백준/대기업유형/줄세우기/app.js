/**
 * @link https://www.acmicpc.net/problem/10431
 * @failed 반례
 * 1
 * 1 20 1 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 19
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N], ...cases] = input;
  cases.forEach(([n, ...lines], idx) => {
    let end = lines.length - 1;
    let count = 0;
    while (end > 0) {
      const beforeEnd = lines.slice(0, end);
      const greaterList = beforeEnd.filter((c) => c > lines[end]);
      const flag = lines.indexOf(greaterList[0]);
      if (flag === -1) {
        end--;
      } else {
        lines.splice(flag, 0, lines[end]);
        lines.splice(end, 1);
        count += end - flag;
      }
    }
    console.log(`${n} ${count}`);
  });
}

solution(input);
