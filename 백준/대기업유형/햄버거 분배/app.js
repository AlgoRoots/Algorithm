/**
 * @link https://www.acmicpc.net/problem/19941
 */

/**
 * 식탁의 길이 N, 햄버거를 선택할 수 있는 거리 K,
 * 사람과 햄버거의 위치가 주어졌을 때, 햄버거를 먹을 수 있는 사람의 최대 수
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄((v, i) =>
  i === 0 ? v.split(" ").map(Number) : v.split("")
);

function solution(input) {
  const [[N, K], pos] = input;
  console.log(pos);
  const visited = Array(N).fill(false);

  let cnt = 0;
  for (let x = 0; x < N; x++) {
    if (pos[x] === "H") continue;

    for (let i = x - K; i <= x + K; i++) {
      if (i < 0 || i >= N) continue;
      if (pos[i] === "H" && !visited[i]) {
        visited[i] = true;
        cnt++;
        break;
      }
    }
  }
  return cnt;
}

console.log(solution(input));
