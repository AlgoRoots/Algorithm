/**
 * @link https://www.acmicpc.net/problem/21921
 */

/**
 * 5:52 ~ 5:55
 * 블로그 시작 N일 지남
 * X일동안 가장 많은 방문자수와 기간 출력
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N, X], visited] = input;

  let max = 0;
  let sum = 0;
  for (let i = 0; i < X; i++) {
    sum += visited[i];
  }
  max = sum;

  for (let i = X; i < N; i++) {
    sum += visited[i] - visited[i - X];
    max = Math.max(sum, max);
  }
  return max;
}

console.log(solution(input));
