// 아래서 위로 갔을 때의 경우도 생각해야 한다.  for loop로 구현하지 말고, Dynamic programming (DP) 기법으로 구현해야 시간 복잡도가 줄어든단다..
// DP문제임 개념알고 다시 풀자.

function solution(land) {
  let maxLists = [];

  for (let i = 0; i < land.length; i++) {
    let maxNum = Math.max(...land[i]);
    let index = land[i].indexOf(maxNum);
    console.log("index", index);
    maxLists.push(maxNum);
    if (i < land.length - 1) {
      land[i + 1] = land[i + 1].filter((num, i) => i !== index);
    }
    console.log(land[i + 1]);
  }

  return maxLists.reduce((acc, cur) => acc + cur, 0);
}
// console.log(
//   solution([
//     [1, 2, 3, 5],
//     [5, 6, 7, 8],
//     [4, 3, 2, 1],
//   ])
// ); // 	5 + 7+ 4
console.log(
  solution([
    [4, 3, 2, 1],
    [2, 2, 2, 1],
    [6, 6, 6, 4],
    [8, 7, 6, 5],
  ])
); // 	5 + 7+ 4
