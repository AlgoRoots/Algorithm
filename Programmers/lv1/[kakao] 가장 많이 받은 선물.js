function solution(friends, gifts) {
  const giftList = gifts.map((g) => {
    return g.split(" ");
  });

  const count = friends.length;
  const giftEmptyTable = Array.from({ length: count }, () =>
    Array(count).fill(0)
  );
  const giftCount = Array.from({ length: count }, () => Array(4).fill(0));

  const giftTable = giftList.reduce((acc, [giver, recipient]) => {
    const giverIdx = friends.indexOf(giver);
    const recipientIdx = friends.indexOf(recipient);
    const targetCount = acc[giverIdx][recipientIdx];
    const updatedCount = targetCount + 1;
    acc[giverIdx][recipientIdx] = updatedCount;

    giftCount[giverIdx][0] = giftCount[giverIdx][0] + 1;
    giftCount[recipientIdx][1] = giftCount[recipientIdx][1] + 1;

    return acc;
  }, giftEmptyTable);

  const scoreChart = giftCount.map((arr) => {
    const [give, receive, score] = arr;
    const updatedScore = give - receive;
    return [give, receive, updatedScore];
  });

  const totalScore = Array.from({ length: count }).fill(0);

  const addOn = (arr, idx) => (arr[idx] = arr[idx] + 1);

  giftTable.forEach((row, aIdx) => {
    row.forEach((val, bIdx) => {
      if (aIdx >= bIdx) return;
      const a = giftTable[aIdx][bIdx];
      const b = giftTable[bIdx][aIdx];
      if (a === b) {
        const scoreA = scoreChart[aIdx][2];
        const scoreB = scoreChart[bIdx][2];
        if (scoreA === scoreB) return;
        if (scoreA > scoreB) {
          return addOn(totalScore, aIdx);
        }
        if (scoreA < scoreB) {
          return addOn(totalScore, bIdx);
        }
      }
      if (a > b) {
        return addOn(totalScore, aIdx);
      }
      if (b > a) {
        return addOn(totalScore, bIdx);
      }
    });
  });

  const result = Math.max(...totalScore);
  // console.log({ giftTable, totalScore, scoreChart, result });
  return result;
}

// solution(["ab", "abcd"], ["ab abcd", "ab abcd", "abcd ab"]); // 반례 : // scoreB > scoreA 로 해버리는 실수ㅠ
// solution(["a", "b", "c"], ["a b", "b a"]);
// solution(["a", "b", "c"], ["a b", "a c", "b a", "b c"]);
// solution(
//   ["a", "b", "c", "d"],
//   ["a b", "a c", "a d", "b c", "c a", "c a", "d a"]
// );
solution(
  ["a", "ab", "c", "d"],
  ["ab c", "ab d", "a d", "a c", "a c", "d a", "d a"]
);

// solution(
//   ["joy", "brad", "alessandro", "conan", "david"],
//   [
//     "alessandro brad",
//     "alessandro joy",
//     "alessandro conan",
//     "david alessandro",
//     "alessandro david",
//   ]
// );
// solution(
//   ["muzi", "ryan", "frodo", "neo"],
//   [
//     "muzi frodo",
//     "muzi frodo",
//     "ryan muzi",
//     "ryan muzi",
//     "ryan muzi",
//     "frodo muzi",
//     "frodo ryan",
//     "neo muzi",
//   ]
// );

// solution(["a", "b", "c"], ["a b", "b a", "c a", "a c", "a c", "c a"]);

// 요런 방식도 알기  if (aIdx >= bIdx)  비교 대체로
// for (let aIdx = 0; aIdx < count; aIdx++) {
//   for (let bIdx = aIdx + 1; bIdx < count; bIdx++) {
//     const givenA = giftTable[aIdx][bIdx]; // A → B 준 선물
//     const givenB = giftTable[bIdx][aIdx]; // B → A 준 선물

//     if (givenA === givenB) {
//       const scoreA = scoreChart[aIdx];
//       const scoreB = scoreChart[bIdx];
//       if (scoreA > scoreB) totalScore[aIdx] += 1;
//       else if (scoreB > scoreA) totalScore[bIdx] += 1;
//     } else {
//       if (givenA > givenB) totalScore[aIdx] += 1;
//       else totalScore[bIdx] += 1;
//     }
//   }
// }
