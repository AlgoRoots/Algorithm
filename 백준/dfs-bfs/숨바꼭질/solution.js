const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

/**
 * @link https://www.acmicpc.net/problem/1697
 */

/**
 * 걸으면 X -1 or X+1
 * 순간이동하면 2*X
 *
 * 수빈 위치 N (start)
 *
 * 도착 위치 K
 *
 * bfs 가장 빠르게 , 찾는 방법
 *
 * move [x+1, x-1, 2x]
 * range nx > 0  !visited[nx]
 * stop nx === K
 *
 */


const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

function solution(input) {
  const [N, K] = input;

  const visited = [];
  const move = (x) => [x + 1, x - 1, 2 * x];
  const isRange = (x) => x >= 0 && x <= 100000;

  const bfs = (start) => {
    const queue = [[start, 0]];
    visited[start] = true;
    while (queue.length) {
      const [x, time] = queue.shift();
      if (x === K) return time;

      for (const nx of move(x)) {
        if (!visited[nx] && isRange(nx)) {
          visited[nx] = true;
          queue.push([nx, time + 1]);
        }
      }
    }
  };

  const time = bfs(N);
  console.log(time);
}

solution(input);