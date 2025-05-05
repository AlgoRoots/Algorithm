const { swap } = require("./Bubble-Sort");

/**
 * Insertion Sort
 * 삽입 정렬
 * 한 번에 하나의 항목을 올바른 위치에 삽입
 * 배열의 정렬을 점진적으로 구축
 *
 * 배열의 두번째 요소부터 시작 첫번 째 요소는 정렬된 것으로 간주
 * 데이터가 들어와서 계속 재정렬하고 실행 중인 정렬을 유지해 최신 상태로 두어야 할 떄 사용
 *
 *      시간(best) (average)  (worst)   공간복잡도
 * 버블     O(n)      O(n^)     O(n^)     O(1)
 * 삽입     O(n)      O(n^)     O(n^)     O(1)
 * 선택     O(n^)     O(n^)     O(n^)     O(1)
 * 합병     O(nlogn)  O(nlogn)  O(nlogn)  O(n)
 * 퀵      O(nlogn)  O(nlogn)  O(n^)     O(log n)
 * 기수     O(nk)     O(nk)     O(nk)     O(n+k)
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curVal = arr[i];
    let j = i - 1;
    for (j = i - 1; j >= 0 && arr[j] > curVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = curVal;
    console.log("arr", arr);
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
