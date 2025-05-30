function solution(n, edge) {
  var answer = 0;
  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array(n + 1).fill(false);

  for (let [v1, v2] of edge) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  const bfs = (start) => {
    const queue = [[start, [start]]];
    visited[start] = true;
    const paths = [];
    while (queue.length > 0) {
      const [cur, path] = queue.shift();
      paths.push(path);
      for (const next of graph[cur]) {
        if (!visited[next]) {
          visited[next] = true;
          queue.push([next, [...path, next]]);
        }
      }
    }
    return paths;
  };

  const paths = bfs(1);

  const maxPaths = paths.filter(
    (p, i, org) => p.length === Math.max(...org.map((v) => v.length))
  );

  return maxPaths.length;
}

solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);
