// [6,12,13,23,45]
// a -b < 0 ? a가 b앞에온다.

/**
 * Bubble Sort
 * 오름차순 정렬일 때 더 큰 숫자가 한 번에 하나씩 뒤로 이동
 * 일반적으로 n^
 * noSwaps O(n)
 */

//ES5
function swap(arr, idx1, idx2) {
  console.log("swap");
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

module.exports = { swap };
// ES2015
function swap2(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// 비효율
function bubbleSort_(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log("arr", i, j, j + 1, "@@", arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

// Optimized with noSwaps
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log("arr", i, j, j + 1, "@@", arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    console.log("ONE PASS COMPLETE!");
    if (noSwaps) break;
  }
  return arr;
}
if (require.main === module) {
  // console.log(bubbleSort_([23, 45, 6, 12]));
  // console.log(bubbleSort([23, 45, 6, 12]));
  console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
}
