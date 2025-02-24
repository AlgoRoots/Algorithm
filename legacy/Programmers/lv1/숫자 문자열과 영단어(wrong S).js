// 틀린풀이
// 나랑 비슷하게 푼 사람
// https://velog.io/@park485201/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%88%AB%EC%9E%90-%EB%AC%B8%EC%9E%90%EC%97%B4%EA%B3%BC-%EC%98%81%EB%8B%A8%EC%96%B4-Javascript

function solution(s) {
  let answer = "";

  const table = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let convert = [];

  for (let i = 0, j = 0; i < s.length; ++i) {
    if (isNaN(s[j]) === false) {
      convert.push(s[j]);
    }
    if (s.indexOf(table[i]) !== -1) {
      let str = s.slice(
        s.indexOf(table[i]),
        s.indexOf(table[i]) + table[i].length
      );
      let num = table.indexOf(str);
      convert.push(num);
    }
    j += 1;
  }

  answer = +convert.join("");
  return answer;
}

console.log(solution("one4seveneight"));
console.log(solution("2three45sixseven"));
console.log(solution("1zerotwozero3"));
