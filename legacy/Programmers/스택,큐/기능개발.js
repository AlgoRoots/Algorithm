function solution(progresses, speeds) {
  var answer = [];
  // 하나가 며칠 걸리는지 각각 계산
  // 그 일수로 배열 생성?
  // [95, 90, 99, 99, 80, 99]

  // [5,  10, 1,   1, 20,  1]
  // let days = [];

  // for (let i = 0; i < progresses.length; i++) {
  //   days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  // }

  const days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  console.log(days);
  //

  // 일 수대로 분리한다.
  // [[5],  [10, 1],   [1, 20,  1]]
  // 각 day의 day[0].length 를 세준다.  b[1].length

  // 만약 i =0 > day[0] = 5 뒤에값중에 가장 크면? answer[0] = 1        [ 7, 3, 9 ]
  //    그 때 day[1]이 뒤에값보다 크면? answer[1] += 1  해주고 i = 1로 넘어간다.
  //    작으면? answer[0] += 1 해주고 i = 1로 넘어간다.

  //  위 조건문이 돌았을 때 첫번 째 값은 판별이 끝났으므로 shift()로 맨 앞에 잘라준다.  [ 3, 9 ]

  // 만약 i=0 > day[0] = 3 이 뒤에값중에 가장 크면?
  // 만약 day[0] 보다 최댓값이 있으면?

  let maxDay = days[0];
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    if (days[i] < maxDay) {
      count++;
    } else {
      maxDay = days[i];
      answer.push(count);
      count = 1;
    }
  }
  answer.push(count);

  // for (let i = 0, j = 0; i < days.length; i++) {
  //   if (days[i] <= maxDay) {
  //     answer[j] += 1;
  //   } else {
  //     maxDay = days[i];
  //     answer[++j] = 1;
  //   }
  // }

  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
