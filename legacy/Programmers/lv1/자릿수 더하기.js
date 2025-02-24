function solution(s) {
  if (s.length === 0) return +s;
  return s
    .toString()
    .split("")
    .reduce((acc, cur) => acc + +cur, 0);
}

console.log(solution(123)); // 6
console.log(solution(987)); // 24
console.log(solution(0)); // 24
console.log(solution()); // 24
