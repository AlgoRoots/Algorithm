/**
 * @link https://www.acmicpc.net/problem/29700

/**
 * 4:10 4:28
 * 첫째 줄에 영화관 세로줄의 개수  $N$($ 1 \leq N \leq 1\,000$)과 
 * 가로줄의 개수 $M$($ 1 \leq M \leq 5\,000$), 
 * 영화를 관람할 동아리원의 수 $K$($ 1 \leq K \leq 10$)가 주어진다.
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄((s, i) => {
  if (i === 0) return s.split(" ").map(Number);
  return s.split("").map(Number);
});

function solution(input) {
  const [[N, M, K], ...status] = input;

  let totalCnt = 0;
  const getAvailableCnt = (line) => {
    let cnt = 0;
    let sum = 0;

    // init
    for (let i = 0; i < K; i++) {
      sum += line[i];
    }

    if (sum === 0) cnt++;

    for (let i = K; i < M; i++) {
      sum += line[i] - line[i - K];
      if (sum === 0) cnt++;
    }
    return cnt;
  };

  status.forEach((line, i) => {
    totalCnt += getAvailableCnt(line);
  });
  return totalCnt;
}

console.log(solution(input));
