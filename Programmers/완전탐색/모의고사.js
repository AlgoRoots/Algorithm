function solution(answers) {
  const patterns = ["12345", "21232425", "3311224455"];
  const scores = [
    [1, 0],
    [2, 0],
    [3, 0],
  ];

  answers.forEach((n, idx) => {
    patterns.forEach((s, i) => {
      if (n === +s[idx % s.length]) {
        scores[i][1] = scores[i][1] + 1;
      }
    });
  });

  const filtered = scores.filter(
    ([n, s]) => s === Math.max(...scores.flatMap(([n, s]) => s))
  );

  const sorted = filtered.sort(([nameA, scoreA], [nameB, scoreB]) => {
    return +nameA - +nameB;
  });

  return sorted.flatMap(([n]) => n);
}
