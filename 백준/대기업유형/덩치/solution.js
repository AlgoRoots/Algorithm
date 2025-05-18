const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/7568
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "))
  .map((line) => line.map(Number));

function solution(input) {
  const [[N], ...d] = input;
  const data = d.map(([x, y], i, arr) => [x, y, i, 1]);

  data.sort(([ax, ay, i], [bx, by]) => {
    if (ax > bx && ay > by) return -1;
    return 1;
  });

  for (let i = 1; i < N; i++) {
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
