/**
 * @link https://www.acmicpc.net/problem/2164
 */

const { createInput } = require("#helper/create-input");

const input = createInput().한줄(Number);

function solution([N]) {
  let queue = Array.from({ length: N }, (v, i) => i + 1);
  let head = 0;
  while (head < queue.length - 1) {
    console.log("queue", head, queue);
    head++;
    queue.push(queue[head++]);
  }

  return queue[head];
}

console.log(solution(input));
