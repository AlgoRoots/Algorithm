function solution(n, m) {
  const a = [];
  const b = [];
  const answer = [];

  // 최대공약수
  for (let i = 1; i <= n, i <= m; i++) {
    if (!(n % i)) a.push(i);
    if (!(m % i)) a.push(i);
  }

  let max = Math.max(
    ...a.filter((val, i, _values) => _values.indexOf(val) !== i)
  );

  // 최소공배수
  let i = Math.ceil(m / n);
  let j = 1;

  while (true) {
    let min = b.filter((val, i, _values) => _values.indexOf(val) !== i);
    if (min.length > 0) return [max, min[0]];
    b.push(n * i), b.push(m * j);
    i++, j++;
  }
}

console.log(solution(3, 12)); // [3,12]
console.log(solution(2, 5)); // [1,10]

// 1 3
// 1 2 3 4 6 12

// 3 6 9 12
// 12 24 36

// 1 2

// 1 5

// 2 4 6 8 10
// 5 10
