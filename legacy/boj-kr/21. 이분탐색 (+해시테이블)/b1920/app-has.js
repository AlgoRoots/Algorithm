const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 이 분리법은 꼭 알고 있자.
const [N, arrA, M, isCard] = input.map((v) => v.split(" "));

function solution() {
  // has() 메서드는 Set 객체에 주어진 요소가 존재하는지 여부를 판별해 반환합니다.
  const array = new Set(arrA);
  const result = isCard.map((v) => (array.has(v) ? 1 : 0));
  console.log(array);
  console.log(result.join("\n"));
}

solution();
