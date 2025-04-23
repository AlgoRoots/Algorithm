/**
 * Dynamic programming 정의
 * 복잡한 문제를 더 간단한 하위 문제의 모음으로 쪼개서
 * 각 하위 문제들을 풀어서 그 답을 저장하는 방식
 *
 * 큰 문제를 작은 문제로 나눠서 푼 뒤, 그 결과를 저장해두고 재활용하여 전체 문제를 푸는 방법
 *
 * 해야하는 작업의 양을 줄이는 방식
 *
 * 하위 문제의 결과를 재사용해서 중복 계산을 피한다.
 * 한 번 계산한 것은 다시 계산하지 않는다. → 시간 줄이기!
 *
 * 상황
 * 1. 최적 부분 구조 존재 여부
 * - 최단 경로 문제, 배낭 문제, 피보나치 수열 등
 * - 최장경로는 어떤 경로를 선택했느냐에 따라 뒤에 올 수 있는 경로가 달라지므로, "최적 부분 구조"  X
 *
 * - 항공편 최저가 경로 > SFO > SEA > FAI
 * - but SEO > PDX > SEA 편이 있는데 안나옴
 * - 최적구조아님
 *
 * 2. 반복되는 하위 문제 존재 여부
 * - 피보나치 수열  (f(n) = f(n-1) + f(n-2))
 * - f(3)을 구할 때 f(2)를 여러 번 구하게 되니까 저장해두는 게 이득
 */

// 비효율적 O(2ⁿ)  O(2^n)
// 똑같은 계산이 반복호출 됨 > 값이 메모되면 ?
const fib = (n) => {
  if (n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);
};
console.log(fib(4));

// memoization O(n)
// fib_memo(1000) // 기다리고 있는 재귀 호출 스택이 많음 >  stack over flow
const fib_memo = (n, memo = [undefined, 1, 1]) => {
  if (memo[n] !== undefined) return memo[n];
  const res = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
  memo[n] = res;
  return res;
};
console.log(fib_memo(100));

// Bottom up 방식" Tabulation  O(n)
// 바닥에서 부터 시작해 테이블(보통 어레이)에 저장
// 보통 loop & 저장
const fib_table = (n) => {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
};

fib_table(1000); // 354224848179262000000 // 호출 스택 없음 loop기반이라 메모리 예측 가능

// 시간 복잡도 o(n) 공간복잡도(메모리사용량) o(1) // 루푸 & 변수 2~3개 사용
// 배열(dp[n])을 만들지 않고,
// 직전 두 값만 변수로 관리해서 계속 갱신함
const fibOptimized = (n) => {
  if (n <= 2) return 1;
  let prev = 1; // f(n - 2)
  let curr = 1; // f(n - 1)
  for (let i = 3; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
};

console.log(fibOptimized(100)); // 354224848179261915075
