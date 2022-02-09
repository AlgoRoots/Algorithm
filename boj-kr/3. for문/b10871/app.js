const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [inputN, inputX] = input[0].split(" ").map((item) => +item);
const arryA = input[1].split(" ").map((item) => +item);

//console.log(inputN, inputX, arryA);

solution(inputN, inputX, arryA);

function solution(N, X, A) {
  let passedNumArray = [];
  for (let i = 0; i < N; i++) {
    if (A[i] < X) {
      passedNumArray.push(A[i]);
    }
  }
  //console.log(passedNumArray);
  passedNumArray = passedNumArray.join(" ");
  console.log(passedNumArray);
}
