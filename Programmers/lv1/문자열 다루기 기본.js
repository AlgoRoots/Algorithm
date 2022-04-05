function solution(s) {
  let newS = s.split("").sort().reverse().join("");
  if (newS.length === 4 || newS.length === 6) {
    for (let str of newS) {
      return isNaN(str) ? false : true;
    }
  } else return false;
}

console.log(solution("111a"));
console.log(solution("a111"));
console.log(solution("111aa"));
console.log(solution("a234"));
console.log(solution("1234"));
console.log(solution("1222234"));
console.log(solution("123456"));
console.log(solution("1234aa"));
