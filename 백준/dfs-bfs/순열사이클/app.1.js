/**
 * @link https://www.acmicpc.net/problem/
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [T, ...rest] = input;

  const cases = rest.reduce((acc, cur, idx) => {
    if (idx % 2 === 1) {
      acc.push(cur);
    }
    return acc;
  }, []);

  const makeCount = (c) => {
    const visited = Array(c.length + 1).fill(false);
    const graph = Array.from({ length: c.length + 1 }, () => []);

    c.forEach((n, i) => {
      graph[i + 1].push(n);
    });

    const dfs = (start, path = [start]) => {
      visited[start] = true;
      const next = graph[start];

      while (!visited[next]) {
        return dfs(next, [...path, ...next]);
      }
      return path;
    };

    let count = 0;

    for (let i = 1; i < graph.length; i++) {
      if (!visited[i]) {
        dfs(i);
        count++;
      }
    }

    return count;
  };

  const res = cases.map((c) => {
    return makeCount(c);
  });
  return res.join("\n");
}

console.log(solution(input));
