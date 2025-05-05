// @failed
function solution(citations) {
  const len = citations.length;

  const isEvery = (arr) => (n) => arr.every((a) => a === n);
  const isEveryCitations = isEvery(citations);

  if (isEveryCitations(0)) return 0;
  if (isEveryCitations(citations[0])) return Math.min(len, citations[0]);

  const sorted = citations.sort((a, b) => b - a);
  console.log(sorted);
  const res = [];
  for (let i = 0; i < len; i++) {
    const cur = sorted[i];
    if (cur < len && i <= cur && len - i <= cur) {
      res.push(cur);
    }
  }

  return Math.max(...res);
}
