function solution(arr) {
  let answer = [];
  let map = new Map();
  console.log(map);
  arr.forEach((el) => {
    if (map.has(el)) {
      map.set(el, map.get(el) + 1);
    } else {
      map.set(el, 1);
    }
  });
  map.forEach((val) => {
    if (val > 1) {
      answer.push(val);
    }
  });
  if (answer.length == 0) answer.push(-1);
  return answer;
}

// const arr = [1, 2, 3, 3, 3, 3, 4, 4];
const arr = [3, 2, 4, 4, 2, 5, 2, 5, 5];
// const arr = [3, 5, 7, 9, 1];
console.log(solution(arr));
