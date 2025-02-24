const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

aNumbers = input.map((A) => +A);

const B = Number(42);

solution();

function solution() {
  const array = Array(42).fill(0);
  //console.log(array);
  let count = 10;
  for (let i = 0; i < aNumbers.length; i++) {
    let remainder = aNumbers[i] % B;
    //console.log("remainder: ", remainder);
    array[remainder]++;
  }
  //console.log("array: ", array);
  let cnt = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      cnt++;
    }
  }
  console.log(cnt);
}

// function solution() {
//   const userNum = [];
//   //console.log(userNum);

//   aNumbers.forEach((x) => {
//     const remainder = x % 42;

//     if (userNum.indexOf(remainder) === -1) {
//       userNum.push(remainder);
//     }
//     //console.log(remainder);
//   });
//   //console.log(userNum);
//   console.log(userNum.length);
// }
