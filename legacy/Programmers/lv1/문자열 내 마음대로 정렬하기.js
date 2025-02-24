function solution(strings, n) {
  let answer = [];
  let alpha = [];
  for (let str of strings) {
    alpha.push([str[n], str]);
  }

  alpha.sort().map((item) => {
    answer.push(item[1]);
  });

  return answer;
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));

// 1.각 원소의 n번째 숫자 뽑기
// 2. 그 숫자를 알파벳순으로 정렬

// 3. 리턴은 전체원소로  , 같으면 사전순으로
// 4.
