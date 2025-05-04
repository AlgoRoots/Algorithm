function solution(genres, plays) {
  const map = genres.reduce((acc, cur, idx) => {
    acc.has(cur)
      ? acc.set(cur, [...acc.get(cur), [idx, plays[idx]]])
      : acc.set(cur, [[idx, plays[idx]]]);
    return acc;
  }, new Map());

  const sortedGenres = [...map.values()].sort((a, b) => {
    const aSum = a.reduce((acc, [_, cur]) => (acc += cur), 0);
    const bSum = b.reduce((acc, [_, cur]) => (acc += cur), 0);
    return bSum - aSum;
  });
  const sortednSlicePlay = sortedGenres.map((list) => {
    return list.sort(([ak, av], [bk, bv]) => bv - av).slice(0, 2);
  });

  const answer = sortednSlicePlay.flat().map(([k]) => k);
  return answer;
}
