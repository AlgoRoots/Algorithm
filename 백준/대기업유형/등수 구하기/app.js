/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 * 점수의 개수 P
 * 10<=p<=50
 * 리스트에 있는 점수 N개
 * 0<= n <=p
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N, newScore, P], ranks = []] = input;

  if (N === 0) return 1;
  if (N === P && ranks[P - 1] >= newScore) return -1;

  let score = 1;

  for (let i = 0; i < N; i++) {
    if (ranks[i] > newScore) score++;
  }
  return score;
}

console.log(solution(input));
