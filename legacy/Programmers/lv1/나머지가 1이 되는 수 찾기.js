function solution(n) {
  let x = 1;
  while (true) {
    if (n % x === 1) {
      return x;
    }
    x++;
  }
}

console.log(solution(111)); //3

// 10 %3 = 1 > 3

// 12 % 11 = 1 > 11

// 55%3
// 85 % 3

// 100 % 3

// 111% 5
// 120 % 7
