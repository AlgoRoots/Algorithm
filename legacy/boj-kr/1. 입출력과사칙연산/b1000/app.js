const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);
//console.log(input);

solution(input[0], input[1]);

function solution(A, B) {
  //console.log('A :', A);
  //console.log('B :', B);

  console.log(A + B);
}
