// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(4)); // 24
// factorial(7); // 5040
function factorial(x) {
  if (x < 0) return 0;
  if (x === 1) return 1;
  return x * factorial(x - 1);
}

// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55
/**
 * 숫자를 받으면 0부터 함수에 전달된 숫자까지의 모든 숫자를 더하는 recursiveRange라는 함수를 작성하시오.
 */
function recursiveRange(n) {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
}

/**
 * 피보나치 수열 구현
 * 피보나치 수열은 1, 1로 시작하는 1, 1, 2, 3, 5, 8, ...의 정수의 수열
 */
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
function fib(n) {
  const list = [1, 1];
  const helper = (arr) => {
    if (n === arr.length) {
      return arr[arr.length - 1];
    }
    const sum = arr[arr.length - 2] + arr[arr.length - 1]; // 2
    list.push(sum);
    return helper(arr);
  };
  return helper(list);
}
console.log(fib(4));

function fib2(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
