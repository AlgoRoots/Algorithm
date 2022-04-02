function solution(numbers) {
  let sum = [];
  for (let j = 0; j < numbers.length; j++) {
    for (let i = j + 1; i < numbers.length; i++) {
      sum.push(numbers[j] + numbers[i]);
    }
  }
  sum.sort((a, b) => a - b);
  const answer = [...new Set(sum)];

  return answer;
}

//console.log(solution([2, 1, 3, 4, 1])); // [2,3,4,5,6,7]
//console.log(solution([5, 0, 2, 7])); //	[2,5,7,9,12]
console.log(solution([0, 100, 10])); //	[2,5,7,9,12]
