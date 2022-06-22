function countOf(arr, value) {
  let count = 0;
  arr.forEach((el) => {
    if (el == value) count++;
  });
  return count;
}

function solution(arr) {
  let answer = [];
  let set = new Set([]);
  arr.forEach((el) => {
    if (set.has(el)) return;
    set.add(el);
    count = countOf(arr.el);
    if (count > 1) answer.push(count);
  });
  if (answer.length == 0) answer.push(-1);
  return answer;
}
