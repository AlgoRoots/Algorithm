function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);
  console.log(darts);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}

console.log(solution("1S2D*3T")); //37
console.log(solution("1S*2T*3S")); // 23
console.log(solution("1D#2S*3S")); // 5
console.log(solution("1D2S#10S")); // 9
console.log(solution("1D2S3T*")); // 59

// Math.pow(n, 2)

// 우선 각 판을 점수화해준다.
// 예제 1; 1, 4, *, 27 (slice?)
// 예제 2; 1, *, 4, *, 27 (slice?)
// 예제 3; 1, #, 4, *, 27 (slice?)

// * : 이전 점수를 각각 2배로 , #: 해당 점수에만 * -1

// *이 발생했을 때 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다.
// #은 그 전값만 -1 곱해주면됨 index - 1 값에 *-1 , 만약 그 전값이 "*"이나, "#"이라면 ?,,
