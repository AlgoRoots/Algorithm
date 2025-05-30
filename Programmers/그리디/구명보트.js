function solution(people, limit) {
  var answer = 0;

  let cnt = 0;
  people.sort((a, b) => a - b);

  while (people.length > 0) {
    let max = 2;
    let acc = 0;
    console.log("people", people, cnt);

    while (max > 0) {
      const cur = people.shift();
      acc += cur;
      console.log("acc", acc, limit, max);
      if (acc > limit) {
        cnt++;
        break;
      }
      max--;
    }
    cnt++;
  }

  return cnt;
}

console.log(solution([70, 50, 80, 50], 100));
