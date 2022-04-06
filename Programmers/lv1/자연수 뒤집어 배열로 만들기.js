function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((a) => +a);
}

console.log(solution(12345)); // [5,4,3,2,1]
