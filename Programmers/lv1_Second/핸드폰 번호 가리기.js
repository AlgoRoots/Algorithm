// 내 풀이
// function solution(phone_number) {
//   var answer = "";
//   let nums = phone_number.split("");
//   console.log(nums);
//   return nums
//     .map((num, index) => (index < nums.length - 4 ? (num = "*") : num))
//     .join("");
// }

// 정규식 표현
// function solution(phone_number) {
//   return phone_number.replace(/\d(?=\d{4}/g, "*");
// }

// 연산 가장 적은 것
function solution(s) {
  let result = "*".repeat(s.length - 4) + s.slice(-4);
  return result;
}
console.log(solution("01033334444"));
console.log(solution("44445"));
