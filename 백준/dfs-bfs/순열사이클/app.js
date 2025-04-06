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
    let current = start;
    while (!visited[current]) {
      visited[current] = true;
      current = arr[current - 1];
    }
  };

  const res = cases.map((c, idx) => {
    const visited = Array.from({ length: c.length + 1 }, () => false);
    let cycleCount = 0;

    for (let i = 1; i <= c.length; i++) {
      if (!visited[i]) {
        dfs(c, i, visited);
        cycleCount++;
      }
    }
    return cycleCount;
  });

  console.log(res.join("\n"));
}

solution(input);
