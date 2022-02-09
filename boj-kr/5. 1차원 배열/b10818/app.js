const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const arrayLength = +input[0];
const items = input[1].split(" ").map(Number);

solution(arrayLength, items);

function solution(arrayLength, items) {
  let min = 1000000;
  let max = -1000000;

  for (let i = 0; i < arrayLength; i++) {
    let item = items[i];
    if (min > item) {
      min = item;
    }
    if (max < item) {
      max = item;
    }
  }
  console.log(`${min} ${max}`);
}

// function solution(arrayLength, items) {
//   items.sort((a, b) => a - b);

//   console.log(`${items[0]} ${items[arrayLength - 1]}`);
// }
