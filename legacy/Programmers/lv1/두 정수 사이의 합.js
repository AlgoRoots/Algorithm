function solution(arr, divisor) {
  //let nums = [arr, divisor].sort((a, b) => a - b);
  let [a, b] = arr < divisor ? [arr, divisor] : [divisor, arr];

  let newArr = [];
  for (let i = a; i <= b; i++) {
    newArr.push(i);
  }

  return newArr.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
