function solution(arr) {
  const answer = [];
  arr.forEach((a, i, origin) => {
    if (a !== origin[i + 1]) answer.push(a);
  });
  return answer;
}
