const { swap } = require("./Bubble-Sort");
/**
 * Quick Sort
 * 배열 요소가 1이하일때까지 정렬
 * 피벗 포인트라는 단일 요소를 선택해 수행
 * 어떤 배열에서 어떤 요소를 선택하던 상관없음
 *
 * 해당 숫자보다 작으면 왼쪽, 크면 오른쪽
 * 더 작은 외쪽 개수 만큼 이동
 *
 * 이 과정을 왼쪽과 오른쪽으로 반복
 *
 *
 */

/**
 * args array, start index, end index
 * 편의상 첫번째 요소를 피봇으로 지정
 * 현재 pivot idx를 변수 저장함
 * loop
 * - 살펴보는 요소보다 피벗이 클 경우 피벗 인덱스 변수를 증가시킨 다음 현재 요소와 피벗 인덱스의 요소를 교환함
 * 시작했던 피벗과 피벗 인덱스를 바꾼다음
 * 피벗 인덱스를 반환
 */
function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, swapIdx, start);
  return swapIdx;
}

// swap [4, 2, 8, 1, 5, 7, 6, 3];
// swap [4, 2, 1, 8, 5, 7, 6, 3];
// swap [4, 2, 1, 3, 5, 7, 6, 8];
// after loop > swap start, swapIdx [ 3, 2, 1, 4, 5, 7, 6, 8]

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

/**
 * 데이터가 미리 정렬되어있을 경우 안좋음 피벗을 그냥 중간으로 하셈
 * 최솟값이나 최댓값을 피벗으로 정하변 n^ 걸림
 * *      시간(best) (average)  (worst)   공간복잡도
 * 퀵      O(nlogn)  O(nlogn)  O(nlogn)  O(n)
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIdx - 1);
    // right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
