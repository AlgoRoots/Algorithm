function solution(progresses, speeds) {
  const remainDays = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
  const answer = [1];
  let target = remainDays[0];
  for (let i = 0; i < remainDays.length - 1; i++) {
    const lastIdx = answer.length - 1;
    const last = answer.at(-1);
    if (target < remainDays[i + 1]) {
      answer.push(1);
      target = remainDays[i + 1];
    } else {
      answer[lastIdx] = last + 1;
    }
  }
  return answer;
}
