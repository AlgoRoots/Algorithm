/**
Sorting 연습- merge helper
두 개의 정렬된 배열이 주어졌을 때, 두 개의 정렬된 배열을 받아들이고 각 배열의 값이 모두 정렬된 새 배열을 반환하는 merge 함수를 작성합니다.

이 함수는 O(n + m)의 시간과 O(n + m)의 공간에서 실행되어야 하며 전달된 매개변수를 수정해서는 안 됩니다.

이전과 마찬가지로 이 함수는 기본적으로 숫자를 오름차순으로 정렬해야 합니다. 세 번째 인수로 비교기 함수를 전달하면 이 비교기가 사용됩니다. (입력 배열은 항상 비교기에 따라 정렬된다는 점에 유의하세요!).

또한 내장된 .sort 메서드를 사용하지 마세요! 이 helper를 사용하여 정렬을 구현할 것이므로 helper자체는 정렬에 의존해서는 안 됩니다.

 */

module.exports = { merge };

function merge(arr1, arr2, comparator) {
  let results = [];
  let i = 0;
  let j = 0;

  const subtract = (v1, v2) => {
    if (comparator) return comparator(v1, v2);
    return v1 - v2;
  };

  // 하나의 배열이 끝날때까지 비교 > 더 작은 값을 results에 넣고 더 작은 배열 idx ++
  while (i < arr1.length && j < arr2.length) {
    if (subtract(arr1[i], arr2[j]) <= 0) {
      // 오름차순이니
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // i 3 j 2
  // j 하나남음
  // 남은것들 넣어주기
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

if (require.main === module) {
  var arr1 = [1, 3, 4, 5];
  var arr2 = [2, 4, 6, 8];
  console.log(merge(arr1, arr2)); // [1,2,3,4,4,5,6,8]

  arr1; // [1,3,4,5];
  arr2; // [2,4,6,8];

  var arr3 = [-2, -1, 0, 4, 5, 6];
  var arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];

  console.log(merge(arr3, arr4)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

  var arr5 = [3, 4, 5];
  var arr6 = [1, 2];

  merge(arr5, arr6); // [1,2,3,4,5]

  var names = ["Bob", "Ethel", "Christine"];
  var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"];

  function stringLengthComparator(str1, str2) {
    return str1.length - str2.length;
  }

  console.log(merge(names, otherNames, stringLengthComparator)); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]
}
