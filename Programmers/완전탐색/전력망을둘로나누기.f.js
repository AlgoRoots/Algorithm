function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array(n + 1).fill(false);
  for (let [v1, v2] of wires) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }
  let left = 0;
  let right = 0;
  const dfs = (start, bp) => {
    for (let next of graph[start]) {
      if (!visited[next]) {
        console.log({ next, bp });
        if (next <= bp) {
          left++;
        } else {
          right++;
        }
        visited[next] = true;
        dfs(next, bp);
        visited[next] = false;
      }
    }
  };

  let diff = Infinity;

  for (let bp = 1; bp <= n; bp++) {
    left = 0;
    right = 0;
    visited[bp] = true;

    dfs(bp, bp);

    visited[bp] = false;

    diff = Math.min(Math.abs(left - right), diff);
    console.log({ bp, left, right });
  }

  return diff;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);

console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
