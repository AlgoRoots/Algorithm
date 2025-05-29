function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (let [v1, v2] of wires) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  let diff = Infinity;

  for (let [cutA, cutB] of wires) {
    const visited = Array(n + 1).fill(false);

    const dfs = (node) => {
      visited[node] = true;
      let cnt = 1;

      for (let next of graph[node]) {
        if (
          !visited[next] &&
          !(
            (node === cutA && next === cutB) ||
            (node === cutB && next === cutA)
          )
        ) {
          console.log("next", cutA, cutB);
          cnt += dfs(next);
        }
      }
      return cnt;
    };

    const partCnt = dfs(cutA);
    const otherCnt = n - partCnt;
    diff = Math.min(diff, Math.abs(otherCnt - partCnt));
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
