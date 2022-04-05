function solution(arr, divisor) {
  let answer = arr.filter((num) => num % divisor === 0).sort((a, b) => a - b);

  if (answer.length === 0) return [-1];
  return answer;
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));
