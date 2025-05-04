function solution(prices) {
  const res = [];
  const len = prices.length;

  while (prices.length > 0) {
    const [cur, ...rest] = prices;
    const min = Math.min(...rest);
    if (cur <= min) {
      res.push(rest.length);
    } else {
      const nextLowIdx = rest.findIndex((np) => cur > np) + 1;
      res.push(Math.max(nextLowIdx, 0));
    }

    prices.shift();
  }
  return res;
}
ole.log(solution([1, 2, 3, 2, 3]));
