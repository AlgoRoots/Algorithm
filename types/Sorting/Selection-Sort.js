const { swap } = require("./Bubble-Sort.js");
/**
 * Selection Sort
 * 버블정렬은 하나씩비교하며 큰숫자를 뒤로 이동하는 방식
 * 선택정렬은 최솟값을 찾아 마지막에 바꾸어 맨 앞에 둠 그리고 그 최솟값 제외하고 다시 최솟값찾음
 *
 * O(n^2)
 * 효율적이지 는 않음, 어떤 이유나 상황으로 swap수를 최소하하는 경우에만 실행
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j);
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      // console.log("@@@@@@@");
      // console.log(arr);
      // console.log("SWAPPING TO: ");
      swap(arr, lowest, i);
      // console.log(arr);
      // console.log("@@@@@@@");
    }
  }
  return arr;
}
console.log(selectionSort([0, 2, 23, 45, 6, 12]));
