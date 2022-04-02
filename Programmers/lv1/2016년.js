function solution(a, b) {
  let answer = "";
  const dayOfWeek = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const seven = 7;
  let firstDay = dayOfWeek[0];
  const month = [
    [0, 0],
    [1, 31, firstDay],
    [2, 29],
    [3, 31],
    [4, 30],
    [5, 31],
    [6, 30],
    [7, 31],
    [8, 31],
    [9, 30],
    [10, 31],
    [11, 30],
    [12, 31],
  ];

  //let d = month[1].push(dayOfWeek[i + (dayOfWeek[i][1] % seven)]);

  for (let i = 1; i < 12; i++) {
    month[i + 1].push(
      dayOfWeek[(dayOfWeek.indexOf(firstDay) + (month[i][1] % seven)) % seven]
    );
    firstDay = month[i + 1][2];
  }

  // 무슨요일?
  answer =
    dayOfWeek[
      ((dayOfWeek.indexOf(month[a][2]) % seven) + (b % seven) - 1 + seven) %
        seven
    ];

  return answer;
}

console.log(solution(12, 15));
console.log(solution(1, 7));

// 아래 계산식 맞지 않음 아래방식에서 수정된 코드임

// 윤년
// 1/1 =금
// 1/31 = 일

// [금, 토 , 일 , 월, 화, 수 , 목]
// 1월 총 31일임 (31- 1 + 1)

// 각 월 1일이 무슨요일인지 구하고 궁금한 일수는 일수%7일 한 값 -1 인덱스번호가 요일이 됨.a

// 각 원의 1일이 무슨요일인지 구하려면? 각 월 마지막 일이 무슨요일인지 알면 됨
// firstDay = week[0];
// 31%7 = 3

// 2월 firstDay = week[0 + (31%7)) = week[3%7] = 월

// 3월 firstDay = week[3 + (29%7)] =
