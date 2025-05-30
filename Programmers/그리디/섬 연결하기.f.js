function solution(n, costs) {
  const graph = Array.from({ length: n }, () => Array(n).fill(0));

  for (const [v1, v2, cost] of costs) {
    graph[v1][v2] = cost;
    graph[v2][v1] = cost;
  }
  const visited = Array(n).fill(false);

  let minCost = Infinity;
  const dfs = (start, cost) => {
    console.log({ start, cost, visited });
    if (visited.every(Boolean)) {
      minCost = Math.min(minCost, cost);
      return;
    }
    const nearList = graph[start];
    const min = Math.min(...nearList.filter((v, i) => v > 0 && !visited[i]));
    for (let next = 0; next < n; next++) {
      if (next === start) continue;
      const nextCost = nearList[next];
      if (nextCost === min && !visited[next]) {
        visited[next] = true;
        dfs(next, cost + nextCost);
        visited[next] = false;
      }
    }
  };

  for (let i = 0; i < n; i++) {
    visited[i] = true;
    console.log(i);
    dfs(i, 0, visited);
    visited[i] = false;
  }
  console.log("minCost", minCost);
  return minCost;
}

// solution(4, [
//   [0, 1, 1],
//   [0, 2, 2],
//   [1, 2, 5],
//   [1, 3, 1],
//   [2, 3, 8],
// ]);
// solution(5, [
//   [0, 1, 5],
//   [1, 2, 3],
//   [2, 3, 3],
//   [3, 1, 2],
//   [3, 0, 4],
//   [2, 4, 6],
//   [4, 0, 7],
// ]);
// solution(7, [
//   [2, 3, 7],
//   [3, 6, 13],
//   [3, 5, 23],
//   [5, 6, 25],
//   [0, 1, 29],
//   [1, 5, 34],
//   [1, 2, 35],
//   [4, 5, 53],
//   [0, 4, 75],
// ]); //159
// solution(5, [
//   [0, 1, 1],
//   [3, 4, 1],
//   [1, 2, 2],
//   [2, 3, 4],
// ]);

solution(5, [
  [0, 1, 1],
  [3, 1, 1],
  [0, 2, 2],
  [0, 3, 2],
  [0, 4, 100],
]); //104
