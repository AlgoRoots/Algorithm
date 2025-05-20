/**
 * @link https://www.acmicpc.net/problem/17266
 */

/**
 * 가로등의 높이가 H라면 왼쪽으로 H, 오른쪽으로 H만큼 주위를 비춘다.
 * 굴다리의 길이 N을 모두 비추기 위한 가로등의 최소 높이를 출력한다.
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N], [M], pos] = input;

  let left = 0; // 최소 높이
  let right = N; // 최대 높이
  let answer = N; // 정답 후보

  // 가로등 위치 정렬 (안 돼있을 수 있으므로)
  pos.sort((a, b) => a - b);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // 현재 시도할 높이
    let prevCovered = 0; // 마지막까지 커버된 위치
    let success = true; // 이번 높이로 커버 가능한가?

    console.log(`🟡 시도 높이: ${mid}`);

    for (let i = 0; i < M; i++) {
      const start = pos[i] - mid;
      const end = pos[i] + mid;

      // 현재 가로등이 직전 커버 구간을 못 잇는 경우 → 실패
      if (start > prevCovered) {
        success = false;
        console.log(
          `❌ ${pos[i]}번 가로등이 커버를 못 이어줌. (start: ${start} > prevCovered: ${prevCovered})`
        );
        break;
      }

      // 이번 가로등으로 커버 가능한 최대 지점 갱신
      prevCovered = end;
      console.log(
        `✅ ${pos[i]}번 가로등: [${start}, ${end}] → 커버 진행됨 (prevCovered = ${prevCovered})`
      );
    }

    // 마지막 가로등까지 커버했는데도 굴다리 끝을 못 덮은 경우 → 실패
    if (prevCovered < N) {
      console.log(
        `❌ 끝까지 커버 못 함. (prevCovered: ${prevCovered} < N: ${N})`
      );
      success = false;
    }

    // 성공했으면 → 더 작은 높이로도 가능할 수 있으니 왼쪽으로 탐색
    if (success) {
      console.log(`🎯 높이 ${mid}로 커버 가능! 더 낮은 높이 탐색\n`);
      answer = mid;
      right = mid - 1;
    } else {
      console.log(`⬆️ 높이 ${mid}로는 부족! 더 큰 높이 필요\n`);
      left = mid + 1;
    }
  }

  return answer;
}

console.log("📢 최소 필요한 높이:", solution(input));
