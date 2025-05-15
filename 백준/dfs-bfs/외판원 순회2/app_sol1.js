/**
 * @link https://www.acmicpc.net/problem/10971
 */

/**
 *
 * 백트레킹 + 순회
 *
 * 도시의 수 N
 * A > B 비용 i,j
 * B > A 비용 j,i
 * 모든 도시 순서를 다 시도해봄 (N! 개)
 * 마지막 도시 → 출발 도시로 돌아가는 비용도 추가
 */

// [0]
//  └─▶ [1] (visited: [0,1])
//        └─▶ [2] (visited: [0,1,2])
//              └─▶ [3] (visited: [0,1,2,3])
//                    └─▶ 돌아갈 수 있으면 [0] → ✅ 최소비용 계산
//              ◀── 백트래킹: visited[3] = false
//        ◀── 백트래킹: visited[2] = false
//  └─▶ [2] ... (다른 경로 탐색)

// dfs(start=0, curr=0, cost=0, count=1)
//  └──> next = 1
//         └──> next = 2
//               └──> next = 3
//                     └──> return to start(0) 확인!

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N], ...W] = input;

  const visited = Array(N).fill(false);
  let minCost = Infinity;

  function dfs(start, curr, cost, count, path) {
    console.log(`DFS: ${path.join(" → ")}, cost=${cost}`);
    if (count === N && W[curr][start] > 0) {
      // 다 돌았음 && 출발 도시로 돌아갈수있으면
      // 총 비용  cost(누적비용) + W[curr][start] (돌아가는 비용))
      const totalCost = cost + W[curr][start];
      console.log(
        `🟢 Complete: ${path.join(" → ")} → ${start}, total=${totalCost}`
      );
      minCost = Math.min(minCost, totalCost);
      return;
      return;
    }

    for (let next = 0; next < N; next++) {
      if (start === 0) {
        console.log({ curr, next, start, v: W[curr][next], visited });
      }

      if (!visited[next] && W[curr][next] > 0) {
        visited[next] = true;
        dfs(start, next, cost + W[curr][next], count + 1, [...path, next]);
        visited[next] = false;
      }
    }
  }
  for (let i = 0; i < N; i++) {
    visited[i] = true;
    console.log({ i });
    dfs(i, i, 0, 1, []);
    visited[i] = false;
  }
  console.log(minCost);
  // console.log(bfs(0, 0));

  // for (let i = 0; i < N; i++) {}
  // console.log("visited", visited, graph);
}

solution(input);
