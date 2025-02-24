function solution(n) {
  let sum = n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + +cur, 0);

  return !(n % sum);
}

console.log(solution(10));
console.log(solution(11));
