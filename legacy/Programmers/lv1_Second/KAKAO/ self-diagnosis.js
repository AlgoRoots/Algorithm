function solution(arr) {
  //key , value 로 나눈다.
  // 1: 1, 2: 1, 3:4
  const result = [];
  const sortedArr = arr.reduce(
    (dic, key) => ((dic[key] = dic[key] ? dic[key] + 1 : 1), dic),
    {}
  );
  for (let key in sortedArr) {
    if (sortedArr[key] > 1) {
      result.push(sortedArr[key]);
    } else return [-1];
  }
  return result;
}

// const arr = [1, 2, 3, 3, 3, 3, 4, 4];
// const arr = [3, 2, 4, 4, 2, 5, 2, 5, 5];
const arr = [3, 5, 7, 9, 1];
console.log(solution(arr));
