function solution(s) {
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      stack.push(arr[i]);
    }
    if (arr[stack.length - 1] === "(" && arr[i] === ")") {
      stack.push(arr[i]);
    }
  }

  return !arr.length ? true : false;
  console.log(arr);
}

console.log(solution("()()")); // 	true
console.log(solution("(())()")); // 	true
console.log(solution(")()(")); // f
