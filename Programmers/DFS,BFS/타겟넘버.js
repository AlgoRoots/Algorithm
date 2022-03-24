// 재귀는 언제이해가될까..

function solution(numbers, target) {
  let answer = 0;
  // 처음 시작은 개수 0개, 합계 0 으로 시작하면서 모든 경우를 dfs로 탐색
  function dfs(depth, sum) {
    // leaf node 도착했을 때, 모든 numbers 탐색
    if (depth === numbers.length) {
      // 주어진 조건에 만족하면 answer++
      if (sum === target) {
        answer += 1;
      }
      return;
    }
    // left child 는 +일 경우
    dfs(depth + 1, sum + numbers[depth]);
    // right child 는 -일 경우
    dfs(depth + 1, sum - numbers[depth]);
  }

  dfs(0, 0);

  return answer;
}
