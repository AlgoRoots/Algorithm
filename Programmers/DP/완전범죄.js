function solution(info, n, m) {
  const INF = Number.MAX_SAFE_INTEGER;
  let prev = Array.from({ length: n + 1 }, () => Array(m + 1).fill(INF));

  // A, B가 아무 흔적도 남기지 않은 초기 상태
  // 이 상태는 항상 가능한 출발점이므로 A 흔적도 0
  prev[0][0] = 0;
  /**
   * 즉, prev[2][3]은
     "A가 총 2의 흔적, B가 총 3의 흔적을 남긴 상태까지 오는 데에 A가 남긴 총 흔적은 몇인지?"를 저장하는 셀
   */

  for (const [aScore, bScore] of info) {
    const cur = Array.from({ length: n + 1 }, () => Array(m + 1).fill(INF));
    // 이전 상태에서 현재 물건에 대해 선택
    for (let a = 0; a < n; a++) {
      for (let b = 0; b < m; b++) {
        // prev[a][b] = A가 a 만큼, B가 b 만큼 흔적을 남긴 상태에 도달했을 때의 A의 누적 흔적 최소값
        // 이전에 도달하지 못한 상태는 건너뜀
        if (prev[a][b] === INF) continue;
        console.log({ aScore, bScore, a, b });

        // A가 훔치는 경우: 흔적이 a + aScore만큼 늘고, B는 그대로
        const na = Math.min(n, a + aScore); // 0+ 1
        cur[na][b] = Math.min(cur[na][b], prev[a][b] + aScore);

        // B가 훔치는 경우: B 흔적 증가, A는 그대로
        const nb = Math.min(m, b + bScore);
        cur[a][nb] = Math.min(cur[a][nb], prev[a][b]);
      }
    }
    prev = cur;
    console.log({ prev });
  }

  // b는 실제로 총 남긴 흔적을 의미하므로 그대로 사용해도 됨
  // prev[a][b] !== INF → 도달 가능
  // b < m → B 흔적 조건 만족
  let res = INF;
  for (let a = 0; a < n; a++) {
    for (let b = 0; b < m; b++) {
      // b < m → 아예 여기서 범위를 제한
      if (prev[a][b] !== INF) {
        res = Math.min(res, prev[a][b]); // prev[a][b]는 A의 누적 흔적
      }
    }
  }
  return res === INF ? -1 : res;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
      [2, 1],
    ],
    4,
    4
  )
); // ✅ 3이 출력됩니다!
