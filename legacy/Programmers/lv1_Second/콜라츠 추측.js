// 내 풀이
function solution(num) {
  let count = 0;
  let n = num;
  while (true) {
    if (n === 1) break;
    if (count === 500) return -1;
    if (n % 2) {
      n = n * 3 + 1;
    } else {
      n = n / 2;
    }
    count++;
  }
  return count;
}

// 가장 깔끔한 방식을 좀 더 다듬음
function solution(num) {
  let count = 0;
  while (num != 1 && count != 500) {
    num % 2 ? (num = num * 3 + 1) : num / 2;
    count++;
  }
  return num == 1 ? count : -1;
}

console.log(solution(626331));
