function solution(array, commands) {
  return commands.map(([i, j, k]) => {
    const slicednSorted = array.slice(i - 1, j).sort((a, b) => a - b);
    return slicednSorted[k - 1];
  });
}
const maxDigit = Math.max(...[6, 10, 2].map((n) => n.length));
