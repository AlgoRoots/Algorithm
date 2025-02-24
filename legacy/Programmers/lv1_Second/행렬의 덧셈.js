function solution(arr1, arr2) {
  return arr1.map((nums, i1) => nums.map((num, i2) => num + arr2[i1][i2]));
}

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
