/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 *
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄((v, i) => {
  if (i === 0 || i === 1) {
    return +v;
  }
  return v.split(" ").map(Number);
});

function solution(input) {
  const [N, M, pos] = input;

  let start = 0;
  let end = N;
  let minH = 0;

  while (start <= end) {
    let h = Math.floor((start + end) / 2);

    let initStart = pos[0] - h;
    let prevEnd = pos[0] + h;

    let isCovered = true;
    for (let x = 1; x < M; x++) {
      const curX = pos[x];
      const min = curX - h;
      const max = curX + h;

      if (prevEnd < min) {
        isCovered = false;
        break;
      }
      prevEnd = max;
    }

    if (initStart > 0 || prevEnd < N) isCovered = false;

    if (isCovered) {
      minH = h;
      end = h - 1;
    } else {
      start = h + 1;
    }
  }
  return minH;
}
console.log(solution(input));
