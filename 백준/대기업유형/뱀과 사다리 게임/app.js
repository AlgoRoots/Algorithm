/**
 * @link https://www.acmicpc.net/problem/16928
 */

/**
 * 3:36 ~ 3:53
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

const END = 100;

function solution(input) {
  const [[ladderCnt, snakeCnt], ...rest] = input;

  const ladderInfo = new Map(rest.slice(0, ladderCnt));
  const snakeInfo = new Map(rest.slice(ladderCnt));
  const visited = Array(END + 1).fill(false);
  const dice = Array.from({ length: 6 }, (_, i) => i + 1); // [1,2,3,4,5,6]

  const bfs = (start) => {
    const queue = [[start, 0, [start]]];

    while (queue.length > 0) {
      const [cur, cnt, acc] = queue.shift(); // acc 는 디버깅용
      for (const num of dice) {
        const nx = cur + num;
        if (nx === END) {
          return cnt + 1;
        }
        if (!visited[nx] && nx <= END) {
          if (ladderInfo.has(nx)) {
            const up = ladderInfo.get(nx);
            visited[up] = true;
            queue.push([up, cnt + 1, [...acc, up]]);
            continue;
          }

          if (snakeInfo.has(nx)) {
            const down = snakeInfo.get(nx);
            visited[down] = true;
            queue.push([down, cnt + 1, [...acc, down]]);
            continue;
          }
          visited[nx] = true;
          queue.push([nx, cnt + 1, [...acc, nx]]);
        }
      }
    }
  };

  return bfs(1);
}

console.log(solution(input));
