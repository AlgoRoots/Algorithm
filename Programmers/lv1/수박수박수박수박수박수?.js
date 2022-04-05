function solution(n) {
  return n % 2 === 0 ? "수박".repeat(n / 2) : "수박".repeat(n / 2) + "수";

  // 다른 분 답
  // return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
  // return "수박".repeat(n / 2 + 1).slice(0, n);
}

console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
console.log(solution(7));
console.log(solution(8));
console.log(solution(9));
