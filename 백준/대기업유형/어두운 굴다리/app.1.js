/**
 * @link https://www.acmicpc.net/problem/17266
 */

/**
 * 가로등의 높이가 H라면 왼쪽으로 H, 오른쪽으로 H만큼 주위를 비춘다.
 * 굴다리의 길이 N을 모두 비추기 위한 가로등의 최소 높이를 출력한다.
 * 가로등 위치는 오름차순이다.
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N], [M], pos] = input;

  let left = 0;
  let right = N; // 0~5
  let answer = N;
  // 1 2 3 4 5
  //   x   x
  //     3
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    console.log("mid", mid, left, right);
    let prevMax = 0;
    let success = true;
    for (let i = 0; i < M; i++) {
      const min = pos[i] - mid;
      const max = pos[i] + mid;
      // 안겹치는 경우 0~4  5~6
      if (prevMax < min) {
        mid++;
        success = false;
        break;
      }
      // 갱신
      prevMax = max;
    }
    // 마지막까지 갔는데 N까지 못 덮음
    if (prevMax < N) {
      success = false;
    }

    // 성공함. 더 작은걸로 검사 필요.
    if (success) {
      right = mid - 1;
      answer = mid;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}

console.log(solution(input));
