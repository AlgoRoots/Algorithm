// MST  → Kruskal 알고리즘
// link https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EC%84%AC-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0-JS
function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);
  console.log("costs", costs);
  const parent = Array.from({ length: n }, (_, i) => i); // [0,1,2,3]

  const find = (x) => (parent[x] === x ? x : (parent[x] = find(parent[x])));

  const union = (a, b) => {
    const rootA = find(a);
    const rootB = find(b);
    console.log({ a, rootA, b, rootB });
    if (rootA === rootB) return false;
    parent[rootB] = rootA;
    return true;
  };

  // 3. 최소 비용 간선부터 연결
  let total = 0;
  for (const [a, b, cost] of costs) {
    console.log("parent", parent);
    if (union(a, b)) {
      total += cost;
    }
  }

  console.log("total", total);

  return total;
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
