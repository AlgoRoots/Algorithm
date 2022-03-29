function solution(numbers, hand) {
  let answer = [];

  // left 1,4,7
  // right 3,6,9
  // 2,5,8,0 더 가까운 손으로, 거리 같다면 본인손잡이로

  // const keyPad = [
  //   {1, 2, 3},
  //   {4, 5, 6},
  //   {7, 8, 9},
  //   {*, 0, #},
  // ]

  // const keyPad = new Map([
  //   ["left", "1, 4, 7"],
  //   ["right", "3, 6, 9"],
  //   ["center", "2,5,8,0"],
  // ]);

  const keyPad = {
    L: [1, 4, 7],
    R: [3, 6, 9],
    center: [2, 5, 8, 0],
  };

  // console.log(keyPad);
  // console.log(Object.keys(keyPad));
  // console.log(keyPad["left"]);
  // console.log(numbers[0]);

  // for (let key in keyPad) {
  //   console.log(keyPad[key]);
  // }

  // for (let num of numbers) {

  // }

  let handPosition = [];

  for (let i = 0; i < numbers.length; i++) {
    Object.keys(keyPad).find((key) => {
      if (keyPad[key].includes(numbers[i])) {
        if (key === "center") {
        }
        handPosition.push(key);
      }
    });
  }
  console.log(handPosition);
  return answer;
}
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
