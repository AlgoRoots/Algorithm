const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/1244
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "))
  .map((line) => line.map(Number));

const toggle = {
  1: 0,
  0: 1,
};

function solution(input) {
  const [[N], state, cnt, ...students] = input;

  for (let [gender, num] of students) {
    if (gender === 1) {
      let cur = num;
      while (cur <= N) {
        state[cur - 1] = toggle[state[cur - 1]];
        cur += num;
      }
    }

    if (gender === 2) {
      state[num - 1] = toggle[state[num - 1]];
      for (let i = num - 2, j = num; i >= 0 && j < N; i--, j++) {
        if (state[i] === state[j]) {
          state[i] = toggle[state[i]];
          state[j] = toggle[state[j]];
        } else {
          break;
        }
      }
    }
  }

  const res = [];

  for (let i = 0; i < state.length; i++) {
    res.push(state[i]);
    if ((i + 1) % 20 === 0) res.push("\n");
    else res.push(" ");
  }

  return res.join("");
}

console.log(solution(input));
