/**
 * @link https://www.acmicpc.net/problem/7512
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

function solution(input) {
  const [[n], ...rest] = input;
  const cases = rest.filter((v, i) => i % 2 !== 0);
  const primes = [];
  for (let n = 2; n <= Math.pow(10, 4); n++) {
    if (isPrime(n)) primes.push(n);
  }

  const getMinPrimeSum = (arr, primes) => {
    const len = arr.length;
    const sumMap = new Map();

    for (const n of arr) {
      let sum = 0;

      // init
      for (let i = 0; i < n; i++) {
        sum += primes[i];
      }

      if (isPrime(sum)) {
        if (!sumMap.has(sum)) sumMap.set(sum, new Set());
        sumMap.get(sum).add(n);
      }

      for (let i = n; i < primes.length; i++) {
        sum += primes[i] - primes[i - n];
        if (isPrime(sum)) {
          if (!sumMap.has(sum)) sumMap.set(sum, new Set());
          sumMap.get(sum).add(n);
        }
      }
    }

    for (let [sum, set] of sumMap.entries()) {
      if (set.size === arr.length) return sum;
    }
  };

  const res = cases.map(
    (c, i) => `Scenario ${i + 1}:\n${getMinPrimeSum(c, primes)}`
  );

  return res.join("\n\n");
}

console.log(solution(input));
