// function solution(participant, completion) {
//   participant.sort();
//   completion.sort();

//   //완주자 목록에서 참가자 하나하나씩 비교하고
//   //없으면 없는 걸 return 한다.
//   for (let i = 0; i < participant.length; i++) {
//     if (participant[i] !== completion[i]) {
//       return participant[i];
//     }
//   }

//   let answer = participant.find((v, i) => v !== completion[i]);
//   return answer;
// }

// function solution(participant, completion) {
//   let dic = completion.reduce(
//     (dic, key) => ((dic[key] = dic[key] ? dic[key] + 1 : 1), dic),
//     {}
//   );
//   console.log(dic);
//   // ind메서드는주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환
//   return participant.find((key) => {
//     if (dic[key]) dic[key] = dic[key] - 1;
//     else return true;
//   });
// }

function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
