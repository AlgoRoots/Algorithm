const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const items = input.map((item) => +item);

solution(items);

function solution(items) {
  let max = 0;
  let maxIdx = 0;

  for (let i = 0; i < 9; i++) {
    let item = items[i];
    if (max < item) {
      max = item;
      maxIdx = i;
    }
  }
  console.log(max);
  console.log(maxIdx + 1);
}

// function solution(items) {
//   let max = Math.max(...items);

//   console.log(max);
//   console.log(items.indexOf(max) + 1);
// }
