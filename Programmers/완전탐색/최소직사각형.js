function solution(sizes) {
  // 오름차순
  const sorted = sizes.map((l) => l.sort((a, b) => a - b));
  const maxX = Math.max(...sorted.map(([x, y]) => x));
  const maxY = Math.max(...sorted.map(([x, y]) => y));
  return maxX * maxY;
}
