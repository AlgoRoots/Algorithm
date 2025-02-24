const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(input);
// 이 분리법은 꼭 알고 있자.
const [N, arrA, M, isCard] = input.map((v) =>
  v.split(" ").map((x) => Number(x))
);

arrA.sort((a, b) => a - b);

function solution() {
  const binarySearch = (arrA, isCardNum) => {
    let start = 0;
    let end = arrA.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arrA[mid] < isCardNum) {
        start = mid + 1;
      } else if (arrA[mid] > isCardNum) {
        end = mid - 1;
      } else {
        return 1;
      }
    }
    return 0;
  };

  const answer = isCard.map((v) => {
    return binarySearch(arrA, v);
  });

  console.log(answer.join("\n"));
}

solution();

//
