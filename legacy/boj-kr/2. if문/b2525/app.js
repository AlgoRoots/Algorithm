const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const A = +input[0].split(" ")[0];
const B = +input[0].split(" ")[1];
const C = +input[1];

console.log(A, B, C);

solution(A, B, C);

function solution(curHour, curMin, cookTime) {
  let endHour = parseInt((A * 60 + B + C) / 60);
  const endMin = parseInt((A * 60 + B + C) % 60);

  if (endHour >= 24) {
    endHour -= 24;
  }

  // console.log(endHour >= 24? endHour - 24 : A, B);
  console.log(endHour, endMin);
}

// const input0 =input[0].split(" ");

// const M=Number(input0[1])+Number(input[1]);
// const H=Number(input0[0])+Math.floor(M/60);

// console.log(`${H%24} ${M%60}`);
