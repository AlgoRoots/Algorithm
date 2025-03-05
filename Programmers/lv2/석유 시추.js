//  [ 0  1  2  3  4  5  6  7
//0  [0, 0, 0, 1, 1, 1, 0, 0],
//1  [0, 0, 0, 0, 1, 1, 0, 0],
//2  [1, 1, 0, 0, 0, 1, 1, 0],
//3  [1, 1, 1, 0, 0, 0, 0, 0],
//4  [1, 1, 1, 0, 0, 0, 1, 1]
// ]
function solution(land) {
  const n = land.length; //5 세로 크기 (행 개수)
  const m = land[0].length; // 8 가로 크기 (열 개수)
  const visited = Array.from({ length: n }, () => Array(m).fill(false)); // 방문 여부 기록
  const groupSize = {}; // 석유 덩어리의 크기 저장

  // 각 열이 포함한 석유 그룹 저장
  const columnGroups = Array(m)
    .fill(null)
    .map(() => new Set());

  let groupId = 0; // 각 석유 덩어리의 ID
  const directions = [
    [1, 0], // 아래 이동
    [-1, 0], // 위 이동
    [0, 1], // 오른쪽 이동
    [0, -1], // 왼쪽 이동
  ];

  // BFS로 석유 덩어리 찾기
  const bfs = (startRow, startCol) => {
    const queue = [[startRow, startCol]];
    console.log("queue", queue);
    visited[startRow][startCol] = true;
    let size = 0;
    const columns = new Set(); // 이 덩어리가 포함된 열들을 저장

    while (queue.length) {
      const [r, c] = queue.shift();
      console.log(`탐색 중: (${r}, ${c})`);

      size++;
      columns.add(c); // 현재 노드가 속한 열 기록

      // 상하좌우 탐색 4번
      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;
        if (
          nr >= 0 &&
          nr < n &&
          nc >= 0 &&
          (nc < m) & (land[nr][nc] === 1) &&
          !visited[nr][nc]
        ) {
          //
          console.log("@@", nr, nc);
          visited[nr][nc] = true;
          queue.push([nr, nc]); // 새로운 방문 위치 큐에 추가
          console.log("queue", queue);
        }
      }
    }

    groupSize[groupId] = size; // 그룹 크기 저장
    for (const col of columns) {
      console.log("col", col);
      columnGroups[col].add(groupId); // 이 열이 포함한 석유 그룹 저장
    }
  };

  // 모든 석유 덩어리 찾기 (BFS 탐색)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (land[i][j] === 1 && !visited[i][j]) {
        bfs(i, j);
        groupId++;
      }
    }
  }

  let maxOil = 0;

  // 3. 시추관을 설치했을 때 최대로 뽑을 수 있는 석유량 계산
  for (let col = 0; col < m; col++) {
    let totalOil = 0;
    for (const gid of columnGroups[col]) {
      totalOil += groupSize[gid];
    }
    maxOil = Math.max(maxOil, totalOil);
  }
  console.log("maxOil", maxOil);
  return maxOil;
}

solution([
  [0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [1, 1, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 1, 1],
]);
