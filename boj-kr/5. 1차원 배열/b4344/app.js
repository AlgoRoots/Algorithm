const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCount = +input[0];
const testCases = input.slice(1);

solution(testCount, testCases);

function solution(C, testCases) {
  for (let i = 0; i < testCases.length; i++) {
    let scores = testCases[i].split(" ").map(Number);
    const N = scores.shift();
    let sum = 0;
    let overAverageCnt = 0;

    sum = scores.reduce((acc, cur) => acc + cur, 0);
    const average = sum / N;

    for (let k = 1; k <= N; k++) {
      if (scores[k] > average) {
        overAverageCnt++;
      }
    }
    console.log(((overAverageCnt / N) * 100).toFixed(3) + "%");
  }
}

// function solution(C, testCases) {
//   for (let i = 0; i < testCases.length; i++) {
//     let scores = testCases[i].split(" ").map(Number);
//     const N = scores[0];
//     let sum = 0;
//     let overAverageCnt = 0;

//     for (let j = 1; j <= N; j++) {
//       sum += scores[j];
//     }
//     const average = sum / N;
//     // console.log(scores);
//     // console.log("sum: ", sum);
//     // console.log("average: ", average);

//     for (let k = 1; k <= N; k++) {
//       if (scores[k] > average) {
//         overAverageCnt++;
//       }
//     }
//     //console.log("overAverageCnt: ", overAverageCnt);
//     console.log(((overAverageCnt / N) * 100).toFixed(3) + "%");
//   }
// }
