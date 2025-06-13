// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  const arr = [...new Set(A)];
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const res = [];
  for (let i = min; i <= max + 1; i++) {
    if (arr.includes(i)) continue;
    else res.push(i);
  }

  return Math.max(1, Math.min(...res));
}

function solution(A) {
  const N = A.length;
  const exists = new Array(N + 2).fill(false);

  for (let num of A) {
    if (num > 0 && num <= N + 1) {
      exists[num] = true;
    }
  }

  for (let i = 1; i <= N + 1; i++) {
    if (!exists[i]) return i;
  }

  return N + 1;
}

console.log(solution([-1, -3]));
