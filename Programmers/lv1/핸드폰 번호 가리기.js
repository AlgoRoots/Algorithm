function solution(n) {
  return n
    .split("")
    .map((num, i) => (i < n.length - 4 ? (num = "*") : num))
    .join("");
}

// 정규식 표현 답
// function hide_numbers(s) {
//   return s.replace(/\d(?=\d{4})/g, "*");
// }

console.log(solution("01033334444"));
console.log(solution("44445"));
