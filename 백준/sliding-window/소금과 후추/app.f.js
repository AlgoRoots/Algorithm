/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 * 4:48 5:44
 * B[i][j] = median(A[i+x][j+y]),
 * where 1 ≤ i ≤ M-W+1, 1 ≤ j ≤ N-W+1, 0 ≤ x, y < W
 * M-W+1줄에 걸쳐 정답 행렬 B를 출력한다.
 * M-W+1, N-W+1
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

// 이진 탐색 삽입 인덱스
function binaryInsert(arr, value) {
  let left = 0,
    right = arr.length;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (arr[mid] < value) left = mid + 1;
    else right = mid;
  }
  arr.splice(left, 0, value);
}

// 이진 탐색으로 삭제
function binaryRemove(arr, value) {
  let left = 0,
    right = arr.length;
  while (left < right) {
    const mid = (left + right) >> 1; // Math.floor(left+right / 2)
    if (arr[mid] < value) left = mid + 1;
    else right = mid;
  }
  if (arr[left] === value) arr.splice(left, 1);
}

function solution(input) {
  const [[M, N, K, W], ...A] = input;
  const row = M - W + 1;
  const col = N - W + 1;

  const B = Array.from({ length: row }, () => Array(col).fill(0));

  for (let i = 0; i < row; i++) {
    let window = [];

    for (let dx = 0; dx < W; dx++) {
      for (let dy = 0; dy < W; dy++) {
        binaryInsert(window, A[i + dx][dy]);
      }
    }
    console.log("window", window);
    // 첫 열 중앙값 저장
    B[i][0] = window[Math.floor(window.length / 2)];
    for (let j = 1; j < col; j++) {
      // 열 슬라이딩
      for (let dx = 0; dx < W; dx++) {
        const removeVal = A[i + dx][j - 1];
        const addVal = A[i + dx][j - 1 + W];
        binaryRemove(window, removeVal);
        binaryInsert(window, addVal);
      }

      B[i][j] = window[Math.floor(window.length / 2)];
    }
  }

  // 출력
  return B.map((row) => row.join(" ")).join("\n");
}

console.log(solution(input));
