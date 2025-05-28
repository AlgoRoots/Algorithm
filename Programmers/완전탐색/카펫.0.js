//     1,2,3,4,6,12
//     4,3
//     6,2
//     12,1

function solution(brown, yellow) {
  const val = brown + yellow;
  const list = [];
  for (let i = val; i > 0; i--) {
    // 가로 길이는 세로길이와 같거나 김.
    if (i < val / i) break;

    if (val % i === 0 && (i - 2) * (val / i - 2) === yellow) {
      list.push([i, val / i]);
    }
  }

  return list[0];
}
