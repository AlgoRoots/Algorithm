/**
 *
 * Comparison-Sort
 * 그동안 정렬 방식은 비교 정렬 알고리즘이었음
 *
 * 특별한 경우에 비교정렬 안쓰고 할 수 있음
 * > 기수 정렬
 * 숫자를 사용함
 * 이진형식
 * 숫자 크기에 대한 정보를 자릿수로 인코딩
 * > 자릿수가 더 큰게 큰 수다
 */

function getDigit(num, idx) {
  return Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10;
}

console.log(getDigit(7323, 2)); // 3
// 7323/100(10^2) 73.23 > 73
// 73%10 > 3
console.log(getDigit(7323, 12)); // 0

function digitCount(num) {
  if (num === 0) return 1; // Math.log10(0) 은 Infinity나오므로
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

digitCount(423);
// 10을 몇번 제곱해야 423이 나오나 > 2
// Math.log10(423) // 2.626... > floor > 2
// 2+ 1 > 3 최종 자릿수

function mostDigit(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

mostDigit([23, 455, 2222]); // 4

/**
 * 수 목록을 받는 함수 만듦
 * mostDigit을 통해 최대 자리수 파악
 * loop 0 ~ mostDigit
 * - 각 자리수에 빈배열로 bucket만듦
 * - 각각의 수를 올바른 버킷에 넘김
 *
 * loop
 * - 기존 배열을 버킷의 값으로 교체
 *
 * 리턴 arr
 *
 * 기수 정렬
 * n: 항목 수 (배열의 길이)
 * k: 그 수의 길이 (자릿수) 자릿수 너무 길면 시간에 상당한 영향을 미침
 *  *      시간(best) (average)  (worst)   공간복잡도
 * 기수     O(nk)     O(nk)     O(nk)     O(n+k)
 */

function radixSort(nums) {
  let maxDigitCount = mostDigit(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      buckets[digit].push(nums[i]);
    }
    console.log({ buckets });
    nums = [].concat(...buckets);
    console.log({ nums });
  }
  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
