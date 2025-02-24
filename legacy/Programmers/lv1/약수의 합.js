function solution(n) {
  // const nums = Array.from({ length: n }, (_, i) => i + 1);
  if (n === 0) return 0;
  const nums = [...new Array(n)].map((_, i) => i + 1);

  return nums.filter((num) => n % num === 0).reduce((acc, cur) => acc + cur);
}

console.log(solution(12)); //28
console.log(solution(0)); //28
