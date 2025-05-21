const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

/**
 * @link https://www.acmicpc.net/problem/2164
 */


const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

function solution([N]) {
  let queue = Array.from({ length: N }, (v, i) => i + 1);
  let head = 0;
  while (store.length !== 1) {
    console.log("queue", queue);
    head++;
    queue.push(queue[head++]); // 2. 그 다음 수 뒤로 이동
  }

  return queue[head];
}

console.log(solution(input));