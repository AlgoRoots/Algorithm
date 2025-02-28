// [
//   [1, 2, 3, 4, 5], //2
//   [6, 7, 8, 9, 10], //3
//   [3, 7, 8, 9, 10], //4
//   [2, 5, 7, 9, 10], //3
//   [3, 4, 5, 6, 7], //3
// ];

function combinations(arr, count) {
  const result = [];

  if (count === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combs = combinations(rest, count - 1); // 재귀
    const attached = combs.map((combination) => [fixed, ...combination]);
    result.push(...attached);
  });
  return result;
}

function solution(n, q, ans) {
  let answer = 0;
  const increaseList = Array.from({ length: n }, (_, i) => i + 1);
  const allComb = combinations(increaseList, 5);
  allComb.forEach((comb, idx) => {
    //[ 1, 2, 3, 4, 5 ]
    let isValid = true;

    for (let i = 0; i < q.length; i++) {
      const target = q[i];
      const targetCnt = ans[i];

      let count = 0;

      target.forEach((n) => {
        if (comb.includes(n)) {
          count++;
        }
      });

      if (count !== targetCnt) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      answer++;
    }
  });

  return answer;
}

solution(
  10,
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [3, 7, 8, 9, 10],
    [2, 5, 7, 9, 10],
    [3, 4, 5, 6, 7],
  ],
  [2, 3, 4, 3, 3]
);
