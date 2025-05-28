function solution(k, dungeons) {
  const n = dungeons.length;
  const visited = Array(n).fill(false);

  let maxCnt = 0;

  const dfs = (cost, cnt) => {
    maxCnt = Math.max(maxCnt, cnt); // 이 위치가 핵심

    for (let next = 0; next < n; next++) {
      const [nm, nc] = dungeons[next];
      if (!visited[next] && nm <= cost) {
        visited[next] = true;
        dfs(cost - nc, cnt + 1);
        visited[next] = false;
      }
    }
  };

  for (let i = 0; i < n; i++) {
    const [min, cost] = dungeons[i];
    // 최소보다 없는경우
    if (min > k) continue;
    visited[i] = true;
    dfs(k - cost, 1);
    visited[i] = false;
  }

  return maxCnt;
}
console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
