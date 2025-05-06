/**
 * 합병정렬
 * O(n log n)
 *
 * 분할/ 정렬/ 합병
 *
 * merge
 * 1. empty array 생성 , 인풋 두개, 마지막에 반환할 배열, 각 입력 배열에서 최솟값부터 시작, i, j 0부터
 * while
 * 2-1. i,j가 각각 배열 끝에 도달하지 않았다면, 첫번째 배열의 값으로 첫번째 항목을 취한 다음 두번째 배열의 첫번째 항목값과 비교
 *      첫번째 항목이 더 작으면 결과 배열에 집어넣은 다음 첫 번째 배열의 다음 항목으로 넘어감
 *      첫 번쨰 항목이 더 크면, 두 번쨰 배열의 값을 취하여 결과로 넣은 다음 두 번 째 배열의 다음 항목으로 넘어감
 * 2-2  배열 하나를 완료한 다음에는 다른 배열의 남은 값 모두 넣음
 *
 * 두 배열이 같은 차순으로 정렬됨 (오름차순)
 * [1,10,50]      [2,14,99,100]
 * [1]
 * [1,2]
 * [1,2,10]
 * [1,2,10,14]
 * [1,2,10,14,50] // 배열 하나 완료
 * [1,2,10,14,50, 99 ,100]
 */

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));

/**
 * 배열을 반으로 나눈다. slice
 * 합병정렬을 호출 하고 다시 반으로 쪼갬
 * 배열의 길이가 1보다 작거나 같을 떄까지 나눈다.
 *
 * 합병함수를 사용해 다시 합친다. 재귀
 * 합병 배열 반환
 *
 * 합병은 정렬 중 가장 효율이 좋음
 *      시간(best) (average)  (worst)   공간복잡도 (이건 버블/삽입/선택 보다 더큼)
 * 합병     O(nlogn)  O(nlogn)  O(nlogn)  O(n)
 *
 * n이 8이면 3번 분할함 log n (분할 횟수)
 * 합병할 때 O(n)번 비교함 (n 비교횟수)
 * 도합 > n log n
 */

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73]));
// console.log(mergeSort([10, 24, 7673, 72, 1, 9]))
