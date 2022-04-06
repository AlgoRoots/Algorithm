// function solution(num) {
//   let count = 0;

//   while (true) {
//     if (num === 1) return count;
//     if (count > 500) return -1;
//     if (!(num % 2)) num = num / 2;
//     else num = num * 3 + 1;
//     count++;
//   }
// }

// while문 약간 고치고 삼항연산자로 바꿈 true에 조건 명시함
function solution(num) {
  let count = 0;

  while (num !== 1 && count != 500) {
    !(num % 2) ? (num = num / 2) : (num = num * 3 + 1);
    count++;
  }
  return num == 1 ? count : -1;
}
console.log(solution(6));
console.log(solution(626331));
