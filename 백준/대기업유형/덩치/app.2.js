/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 *
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N], ...data] = input;
  const result = [];
  for (let i = 0; i < N; i++) {
    let rank = 1;
    for (let n = 0; n < N; n++) {
      if (i === n) continue;
      const [cx, cy] = data[i];
      const [nx, ny] = data[n];
      if (nx > cx && ny > cy) rank++;
    }
    result.push(rank);
  }

  return result.join(" ");
}

console.log(solution(input));
