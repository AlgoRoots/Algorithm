const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
// console.log(N, M);

function solution() {
  const pwMap = new Map();
  for (let i = 1; i <= N; i++) {
    const [key, value] = input[i].split(" ");
    pwMap.set(key, value);
  }

  let answer = "";

  for (let i = N + 1; i < N+M+1; i++) {
    answer += pwMap.get(input[i]) + "\n";
  }

  console.log(answer);
}
solution();
