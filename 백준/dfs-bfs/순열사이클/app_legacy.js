/**
 * @link https://www.acmicpc.net/problem/10451
 */
const { createInput } = require("#helper/create-input");

const input = createInput().여러줄((v, idx) => v.split(" ").map(Number));

function solution(input) {
  const [[caseCnt], ...rest] = input;

  const cases = rest.reduce((acc, cur, idx) => {
    if (idx % 2 === 1) {
      acc.push(cur);
    }
    return acc;
  }, []);

  const dfs = (arr, start, visited) => {
    const result = []; //1
    if (visited[start - 1]) return [];
    const traversal = (v) => {
      result.push(v); //1
      visited[v - 1] = true;
      const next = arr[v - 1]; // 3
      if (result[0] === v && visited[next - 1]) return result;
      if (!visited[next - 1]) {
        traversal(next);
      }
    };
    traversal(start);
    return result;
  };

  const res = cases.map((c, idx) => {
    const cycles = [];
    const visited = Array.from({ length: c.length }, () => false);

    c.forEach((n, idx) => {
      const cycle = dfs(c, idx + 1, visited);
      if (cycle.length) return cycles.push(cycle);
    });

    return cycles;
  });

  const count = res.map((c) => c.length);
  console.log(count.join("\n"));
}

solution(input);
