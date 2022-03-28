function solution(lottos, win_nums) {
  const answer = [];
  let zeroCount = 0;
  let matchCount = 0;

  for (let num of lottos) {
    if (num === 0) {
      zeroCount++;
    }
    if (win_nums.includes(num)) {
      matchCount++;
    }
  }

  // 현재순위
  // 순위 = 6- 맞은개수 + 1 = 7

  // let maxRank = 7 - (zeroCount + matchCount);
  const maxRank =
    zeroCount === 0 && matchCount === 0 ? 6 : 7 - (zeroCount + matchCount);

  const minRank = matchCount === 0 ? 6 : 7 - matchCount;

  answer.push(maxRank, minRank);

  return answer;
}
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
console.log(solution([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]));
