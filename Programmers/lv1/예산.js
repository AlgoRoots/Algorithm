function solution(d, budget) {
  let sum = 0;
  let maxCount = 0;

  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; ++i) {
    sum += d[i];
    if (sum <= budget) {
      maxCount++;
    }
  }
  return maxCount;
}

console.log(solution([1, 3, 2, 5, 4], 9)); //3
console.log(solution([2, 2, 3, 3], 10)); //3

// 최대한 많이 지원해줘라~

// 최소금액으로 합하면 되지 않을까?

// 1+2+3+4 = 10 안됨
// 1+2+3 = 9 최대개수임
