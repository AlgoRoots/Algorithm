/**
 * @link https://www.acmicpc.net/problem/2644
 */

/**
 * 촌수계산
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[n], [from, to], [m], ...relations] = input;

  const visited = Array(n + 1).fill(false);

  // x는 뒤에 나오는 정수 y의 부모 번호
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [x, y] of relations) {
    graph[x].push(y);
    graph[y].push(x);
  }
  const bfs = (start) => {
    const queue = [[start, 0]];
    if (start === to) {
      return count;
    }

    visited[start] = true;

    while (queue.length) {
      const [next, count] = queue.shift();
      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, count + 1]);
      }
    }
    return -1;
  };

  console.log(bfs(from));
}

solution(input);
