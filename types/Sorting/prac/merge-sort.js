/**
Merge Sort

merge sort 알고리즘을 구현합니다. 배열이 주어지면 이 알고리즘은 배열의 값을 정렬합니다. 이 함수는 배열과 선택적 비교기 함수의 두 가지 매개변수를 받습니다.

비교기 함수는 비교할 배열에서 두 값을 가져오는 콜백입니다. 이 함수는 첫 번째 값이 두 번째 값보다 작으면 음수 값을, 첫 번째 값이 두 번째 값보다 크면 양수 값을, 두 값이 모두 같으면 0을 반환합니다.

제공하는 기본 비교기는 두 매개 변수가 숫자이며 가장 작은 값부터 가장 큰 값까지 정렬한다고 가정해야 합니다.

다음은 Merge Sort가 작동하는 방식에 대한 몇 가지 지침입니다:

한 값을 다른 값과 비교할 수 있을 때까지 배열을 반으로 나눕니다.

정렬된 배열이 더 작아지면 배열의 전체 길이가 될 때까지 해당 배열을 다른 정렬된 쌍과 병합합니다.

배열이 다시 병합되면 병합된(그리고 정렬된!) 배열을 반환합니다.

이 함수를 구현하려면 두 개의 정렬된 배열과 비교기를 받아 새로운 정렬된 배열을 반환하는 merge 함수도 구현해야 합니다. 이전 연습에서 이 함수를 구현했으므로 해당 코드를 복사하여 여기에 붙여 넣으세요.

여기에서 Merge Sort에 대한 자세한 내용을 확인할 수 있습니다.: https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/intermediate-sorting-algorithms
 */

const { merge } = require("./merge-helper.js");

function mergeSort(arr, comparator) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), comparator);
  let right = mergeSort(arr.slice(mid), comparator);
  return merge(left, right, comparator);
}

mergeSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
mergeSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
mergeSort([1, 2, 3]); // [1, 2, 3]
mergeSort([]);

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
mergeSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

mergeSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

var moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

mergeSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
