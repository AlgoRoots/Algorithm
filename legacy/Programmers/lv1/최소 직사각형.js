function solution(sizes) {
  const a = [];
  const b = [];
  sizes
    .map((item) => item.sort((a, b) => b - a))
    .filter((item) => {
      a.push(item[0]);
      b.push(item[1]);
    });
  return Math.max(...a) * Math.max(...b);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
// 각 배열을 크기순으로 정렬한다.
// 각 배열의 max값을 출력한다.
// 그 값 두개를 곱해서 리턴한다.
