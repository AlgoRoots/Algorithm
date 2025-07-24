const { defineInput, getInput } = require("#helper/input-config-helper");

const inputConfig = defineInput("multiLine", (v, i) => {
  return i === 0 ? v.split(" ").map(Number) : v;
});
const input = getInput(inputConfig);

/**
  i = 0 → queue = [0]
  i = 1 → queue = [0,1]
  i = 2 → queue = [0,1,2]
  i = 3 → 3 - 0 > 2 → pop → queue = [1,2,3]
  i = 4 → 4 - 1 > 2 → pop → queue = [2,3,4]


  i = 0 → 큐: [] → 좋은 친구 없음 → answer += 0

  i = 1 → 큐: [0] → 좋은 친구 쌍: (0,1) → answer += 1

  i = 2 → 큐: [0,1] → (0,2), (1,2) → answer += 2

  i = 3 → 큐: [1,2] → (1,3), (2,3) → answer += 2
 */
function solution(input) {
  const [[N, K], ...names] = input;

  const queues = Array.from({ length: 21 }, () => []);

  let answer = 0;
  for (let i = 0; i < N; i++) {
    const nameLen = names[i].length;
    const queue = queues[nameLen];

    // 등수 차이가 K 초과인 학생은 제외 (i - queue[0] > K)
    while (queue.length && i - queue[0] > K) {
      queue.shift();
    }
    console.log("@@queue", i, queue);

    answer += queue.length;

    queue.push(i);
  }

  console.log(answer);
}

console.log(solution(input));
