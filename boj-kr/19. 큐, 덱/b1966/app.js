const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, ...testcases] = input;
console.log(n);
console.log(testcases);
const answer = "";

function solution(n, testcases) {
  for (let i = 0; i < n; i += 1) {
    let count = 0; // 인쇄된 문서 수
    // M을 뽑아준다. 짝수번째 index에있는 두번째 요소로 빼와준다.
    let M = Number(testcases[i * 2].split(" ")[1]);
    // queue = 홀수번째 index엥 있다.
    const queue = testcases[i * 2 + 1].split(" ").map((i) => Number(i));
    // console.log("m", M);
    // console.log(queue);

    while (true) {
      const front = queue.shift();
      //console.log(front);
      let max = Math.max(...queue);
      // 만약 queue elements 의 최댓값이 front 보다 작고, 찾는 index M이 0이라면, shifItem이 첫번째로 출력되야 함
      if (max > front) {
        if (M === 0) {
          queue.push(front);
          // index M이 뒤로 다시 들어감으로서 M 값을 재정의해줌.
          M = queue.length - 1;
        } else {
          // index M 이 0보다 크면 (front가 아니라면) front를 queue의 뒷배열에 넣어주고 index M -1 해주면됨
          queue.push(front);
          M -= 1;
        }
      } else {
        // front가 제일크다? 그거 뽑으면 됨
        count++;
        if (M === 0) {
          break;
        } else {
          M -= 1;
        }
      }
    }
    console.log("count: ", count);
  }
}

solution(n, testcases);
