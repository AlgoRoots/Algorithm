function solution(N, stages) {
  let answer = [];

  const curStageCount = [];
  const curSuccessCount = [];
  for (let i = 1; i <= N; i++) {
    curStageCount.push(stages.filter((v) => v === i).length);
    curSuccessCount.push(stages.filter((v) => v >= i).length);
  }

  const failRate = curStageCount.map(
    (item, index) => item / curSuccessCount[index]
  );

  // failRate.sort((a, b) => {
  //   if (a.failRate === b.failRate) {
  //     return a.stageNum - b.stageNum;
  //   }
  //   return b.failRate - a.failRate;
  // });

  // return failRate.map(item => {
  //   return item.stageNum;
  // });
  // return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); //	[4,1,2,3]
