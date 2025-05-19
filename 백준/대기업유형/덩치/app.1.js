/**
 * @link https://www.acmicpc.net/problem/7568
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N], ...d] = input;
  const data = d.map(([x, y], i, arr) => [x, y, i, 1]);

  data.sort(([ax, ay, i], [bx, by]) => {
    if (ax > bx && ay > by) return -1;
    return 1;
  });

  for (let i = 1; i < d.length; i++) {
    const [px, py] = data[i - 1];
    const [cx, cy] = data[i];
    // 명백히 큰 경우
    if (px > cx && py > cy) {
      data[i][3] = i + 1;
    } else {
      data[i][3] = data[i - 1][3];
    }
  }
  console.log("data", data);

  const res = data
    .sort(([ax, ay, ai], [bx, by, bi]) => ai - bi)
    .map(([_, __, ___, v]) => v);

  return res.join(" ");
}

console.log(solution(input));
