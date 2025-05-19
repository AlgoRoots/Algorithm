/**
 * @link https://www.acmicpc.net/problem/1244
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

const toggle = {
  1: 0,
  0: 1,
};
/**
 * XOR (^) 이 있구만
 * XOR 연산은 두 비트가 다를 때 1, 같을 때 0을 반환
 * ^ 1은 0과 1을 서로 반대로 바꾼다 (토글)
 * ^ 0은 아무 영향 없음 (그대로 유지됨)
 * state[idx] ^= 1;
 */
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
          break; // 반례 ..
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
