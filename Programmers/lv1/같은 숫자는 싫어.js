function solution(n) {
  let answer = [];
  // for (let i = 0; i < n.length; i++) {
  //   if (n[i] !== n[i + 1]) {
  //     answer.push(n[i]);
  //   }
  // }
  // return answer;

  return n.filter((num, index) => num !== n[index + 1]);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); //]	[1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); //]	[1,3,0,1]
