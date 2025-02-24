const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log("input", input);

const cases = Number(input[0]);
let stack = [];
let answer = "";


function soulution() {
  for (let i = 1; i <= cases; i++) {
    let splited = input[i].split("");
    // stack 에 첫번째 원소 쌓기
    stack.push(splited[0]);
    console.log("stack", stack);
    console.log("splited", splited);
    for (let j = 1; j < splited.length; j++) {
      if (stack[-1] === "(" && splited[j] === ")") {
        // stack 의 첫번째 값이 (  splited에 다음 값이 ) 이면 pair이므로 stack의 마지막 값을 지워준다 pop()
        stack.pop();
      } else {
        // fair가 아니라면 splited[j]값을 stack에 넣어준다.
        stack.push(splited[j]);
      }
      console.log("stack: after pop:", stack);
      console.log("splited: after push:", splited);
    }
    if (stack.length === 0) {
      answer += "YES" + "\n";
    } else {
      answer += "NO" + "\n";
    }
    // stack 초기화
    stack = [];
  }
  console.log(answer);
}

soulution();
