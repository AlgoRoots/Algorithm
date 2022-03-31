function solution(numbers) {
  // let numArr = new Array(10).fill(-1);
  // let answer = [];
  // for (let i = 0; i < numbers.length; i++) {
  //   if (numArr[numbers[i]] === -1) {
  //     numArr[numbers[i]] = numbers[i];
  //   }
  // }

  // for (let i = 0; i < numArr.length; i++) {
  //   if (numArr[i] === -1) answer.push(i);
  // }

  // return answer.reduce((acc, curr) => acc + curr, 0);

  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
