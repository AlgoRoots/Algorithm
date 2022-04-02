function solution(left, right) {
  let answer = 0;
  let count = 0;
  while (true) {
    if (left > right) {
      return answer;
    }
    for (let i = 1; i <= left; i++) {
      if (left % i === 0) {
        count++;
      }
    }
    answer = count % 2 === 0 ? answer + left : answer - left;
    count = 0;
    left += 1;
  }
}

console.log(solution(13, 17)); // 43
