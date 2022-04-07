function solution(n) {
  let count = 1;
  let sum = 0;

  for (let i = 1, j = 1; i < n / 2; i++) {
    j = i;
    while (true) {
      console.log(j, sum);
      sum += j;
      j++;
      if (sum > n) break;
      if (sum === n) {
        count++;
        break;
      }
    }
    sum = 0;
  }

  return count;
}
console.log(solution(15)); // 	4
