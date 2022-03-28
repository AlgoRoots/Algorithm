function solution(arr, k) {
  let sort = arr.sort((a, b) => b - a);
  return sort[k - 1];
}

let arr = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let k = 4;

console.log(solution(arr, 4));
