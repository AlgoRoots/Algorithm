const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/2531
 */

/**
 * 접시의 수 N, 초밥의 가짓수 d, 연속해서 먹는 접시의 수 k, 쿠폰 번호 c
 * 초밥의 종류를 나타내는 1 이상 d 이하
 * 주어진 회전 초밥 벨트에서 먹을 수 있는 초밥의 가짓수의 최댓값을 하나의 정수로 출력한다.
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v, i) => (i === 0 ? v.split(" ").map(Number) : +v));

function solution(input) {
  const [[N, d, k, c], ...sushi] = input;
  const kinds = new Map();

  let maxKind = 0;
  let curKind = 0;

  for (let i = 0; i < k; i++) {
    const cur = sushi[i];
    kinds.set(cur, (kinds.get(cur) || 0) + 1);
  }

  if (!kinds.has(c)) curKind = kinds.size + 1;
  else curKind = kinds.size;

  maxKind = curKind;

  for (let i = k; i < N + k; i++) {
    const prev = sushi[(i - k) % N];
    const cur = sushi[i % N];

    if (kinds.get(prev) === 1) {
      kinds.delete(prev);
    } else {
      kinds.set(prev, kinds.get(prev) - 1);
    }

    kinds.set(cur, (kinds.get(cur) || 0) + 1);

    if (!kinds.has(c)) curKind = kinds.size + 1;
    else curKind = kinds.size;

    maxKind = Math.max(maxKind, curKind);
  }

  return maxKind;
}

console.log(solution(input));
