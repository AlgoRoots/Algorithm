function solution(n) {
  if (n.length <= 1) return [-1];
  return n.filter((num) => Math.min(...n) !== num);
}

console.log(solution([4, 3, 2, 1])); // [4,3,2]
