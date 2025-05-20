/**
 * BIG O linearSearch
 * best  average worst
 *  O(1)   O(n)   O(n)
 *
 * 배열, 값을 인자로 받는다.
 * loop 로 배열에 값이 있는지 확인
 * 해당값의 인덱스 반환 없으면 -1
 *
 */

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

/**
 * BinarySearch 이진검색 (이분탐색)
 *  best   average    worst
 *  O(1)   O(log n)   O(log n)
 *
 * log 2 > log n
 * 16 legn > 4 steps
 * 32 leng > 5 steps
 * 확인할 때마다 남은 항목 절반을 없앰
 * 데이터가 분류되어있어야함 (쩡렬, 알파벳순.. 오름차순..)
 *
 * Dividing and Conquering
 *
 * Pseudocode
 * 정렬 된 배열, 값을 인자로 받는다.
 * 2개의 변수를 만든다. 좌 0, 우 머자먹 idx
 * loop
 * 1. 항목을 찾는다. 못차즈면 반ㅈ복
 * 2. 좌 pointer 가 right pointer 가 되기 전까지 반복
 *  - create a pointer in the middle.
 *  - If you find the value you want, return the index.
 *  - If the value is too small, move the right pointer down
 *  - If the value is too large, move the left pointer up
 * - 못찾으면 -1
 */

function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (arr[mid] !== value && start <= end) {
    if (value < arr[mid]) end = mid - 1;
    else start = mid + 1;
    mid = Math.floor((start + end) / 2);
  }
  return arr[mid] === value ? mid : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));

/**
 * Naive String Search
 * 긴 무자열에서 짧은 문자열이 등장하는 횟수를 구할 때
 * get times "ha" in "harold said haha in hamburg"
 *
 * wowomgzomg  > omg
 *
 * loop over the longer string
 * loop over the shorter string
 * 문자가 일치하지 않으면 break out of inner loop
 * 일치하면 keep going
 * 내부 루프 완료하고 일치하면 count ++
 * return the count
 */

function naiveStringSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

/**
 * 알고리즘	시간복잡도	특징
Naive	O(N × M)	가장 단순한 방식 (모든 위치에서 비교)
KMP	O(N + M)	접두사/접미사 정보 활용
Boyer-Moore	평균 O(N)	뒤에서부터 비교, 점프(스킵) 전략
Rabin-Karp	평균 O(N), 해시	문자열을 해시로 변환하여 비교
 */
