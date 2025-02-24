// 시간초과 남
// function solution(A, B) {
//   let sum = 0;

//   while (true) {
//     if (A.length === 0) return sum;
//     sum += Math.min(...A) * Math.max(...B);
//     A = A.filter((n, i) => i !== A.indexOf(Math.min(...A)));
//     B = B.filter((n, i) => i !== B.indexOf(Math.max(...B)));
//   }
// }

// 다시 제출
function solution(A, B) {
  let sum = 0;
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  while (true) {
    if (A.length === 0) return sum;
    sum += A.pop() * B.pop();
  }
}

console.log(solution([1, 4, 2], [5, 4, 4])); // 29
//console.log(solution([1, 2], [3, 4])); // 10

// A에서 최솟값은 B의 최댓값과 곱해야한다?
