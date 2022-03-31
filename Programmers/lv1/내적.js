function solution(a, b) {
  const answer = a.reduce((acc, cur, i) => acc + cur * b[i], 0);
  return answer;
}
console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
