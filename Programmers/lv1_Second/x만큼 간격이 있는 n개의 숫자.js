function solution(x, n) {
  let answer = [x];
  while (answer.length < n) {
    answer.push(answer[answer.length - 1] + x);
  }
  return answer;
}

console.log(solution(2, 5));
