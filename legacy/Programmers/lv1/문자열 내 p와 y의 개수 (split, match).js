// split()
// function solution(s) {
//   return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
// }

// match()
function solution(s) {
  //return s.match(/p/gi).length === s.match(/y/gi).length;
  return s.match(/p/gi)?.length === s.match(/y/gi)?.length;
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));
console.log(solution("ooo"));
