function solution(arr1, arr2) {
  return arr1.map((nums, i1) => nums.map((n, i2) => n + arr2[i1][i2]));
}

// 원래 내 풀이, 중괄호 굳이 필요없다!
// function solution(arr1, arr2) {
//   arr1.map((nums, i1) => {
//     nums.map((n, i2) => {
//       n += arr2[i1][i2];
//       arr1[i1][i2] = n;
//     });
//   });
//   return arr1;
// }

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
