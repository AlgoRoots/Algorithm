function solution(arr) {
  let i = Math.max(...arr);

  while (true) {
    let lists = arr.filter((num) => i % num === 0);
    if (lists.length === arr.length) return i;
    lists = [];
    i++;
  }
}

console.log(solution([2, 6, 8, 14])); // 168
console.log(solution([1, 2, 3])); // 6
