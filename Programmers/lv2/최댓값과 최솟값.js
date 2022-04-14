function solution(s) {
  const answer = [];
  let sorted = s.split(" ").sort((a, b) => a - b);
  answer.push(sorted.shift());
  answer.push(sorted.pop());
  return answer.join(" ");
}

console.log(solution("1 2 3 4")); // 	"1 4"
console.log(solution("-1 -2 -3 -4")); // 	"-4 -1"
console.log(solution("-1 -1")); // "-1 -1"
