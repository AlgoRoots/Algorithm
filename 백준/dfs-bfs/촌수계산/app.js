/**
 * @link https://www.acmicpc.net/problem/2644
 */

/**
 * 촌수계산
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[n], [target1, target2], [m], ...relations] = input;

  const visited = Array(n + 1).fill(false);

  // x는 뒤에 나오는 정수 y의 부모 번호
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [x, y] of relations) {
    graph[x].push(y);
    graph[y].push(x);
  }
  const found = [];
  let result = [];
  const dfs = (start, count, dist) => {
    if (!found.includes(start) && (start === target1 || start === target2)) {
      found.push(start);
      dist.forEach((d) => (visited[d] = false));
    }
    if (found.length === 2) {
      result.push(dist.reverse());
      return;
    }
    const parents = graph[start];
    parents.forEach((p) => {
      if (found.length === 2) return;
      if (!visited[p] && (p !== target1 || p !== target2)) {
        visited[p] = true; // visited [2]
        dfs(p, count + 1, [...dist, p]);
      }
    });
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(i, 0, [i]);
    }
  }

  const gap = (() => {
    const a = result[0].indexOf(target1);
    const b = result[0].indexOf(target2);
    if (a === -1 || b === -1) return -1;
    return Math.abs(result[0].indexOf(target1) - result[0].indexOf(target2));
  })();

  console.log(gap);
}

solution(input);
