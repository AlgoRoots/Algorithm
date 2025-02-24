function solution(x, n) {
  let arr = [x];
  while (true) {
    if (arr.length === n) break;
    let last = arr[arr.length - 1];
    arr.push(last + x);
  }

  return arr;
}

console.log(solution(2, 5));
