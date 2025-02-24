function solution(n) {
  // 아래처럼 하면 시간초과 날 것 같아서 정규표현식 찾아서 풀어봄
  // let oneCount = n
  //   .toString(2)
  //   .split("")
  //   .filter((n) => n === "1").length;
  const oneCount = n.toString(2).match(/1/g).length;

  // let nextNum = n + 1;
  while (true) {
    n++;
    let nextOneCount = n.toString(2).match(/1/g).length;
    if (oneCount === nextOneCount) return n;
  }
}

console.log(solution(78)); // 	83
//console.log(solution(5)); // 	23
