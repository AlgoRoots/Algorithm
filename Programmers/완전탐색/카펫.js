function solution(brown, yellow) {
  const total = brown + yellow;
  let result;
  for (let h = 1; total / h >= h; h++) {
    const w = total / h;
    const isYellow = (w - 2) * (h - 2) === yellow;
    if (total % h === 0 && isYellow) {
      result = [w, h];
    }
  }

  return result;
}
