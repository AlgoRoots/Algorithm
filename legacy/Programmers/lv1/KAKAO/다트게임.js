function solution(dartResult) {
  let dart = dartResult.split("");
  let score = [];

  for (let i = 0; i < dart.length; i++) {
    if (dart[i] === "0" && dart[i - 1] === "1") dart[i] = 10;
    if (dart[i] === "S") score.push(Math.pow(dart[i - 1], 1));
    if (dart[i] === "D") score.push(Math.pow(dart[i - 1], 2));
    if (dart[i] === "T") score.push(Math.pow(dart[i - 1], 3));
    if (dart[i] === "*" || dart[i] === "#") score.push(dart[i]);
  }

  console.log(score);
  for (let i = 0; i < score.length; i++) {
    if (score[i] === "#") {
      score[i - 1] = score[i - 1] * -1;
    }

    if (score[i] === "*") {
      if (isNaN(score[i - 2])) {
        score = score.map((val, index) =>
          index < i && index >= i - 3 && !isNaN(val) ? val * 2 : val
        );
      } else {
        score = score.map((val, index) =>
          index < i && index >= i - 2 && !isNaN(val) ? val * 2 : val
        );
      }
    }
  }
  console.log("score !!!", score);
  return score.filter((val) => !isNaN(val)).reduce((acc, cur) => acc + cur, 0);
}

// console.log(solution("1S2D*3T")); //37
console.log(solution("1S*2T*3S")); // 23
console.log(solution("1D#2S*3S")); // 5
//console.log(solution("1D2S#10S")); // 59
console.log(solution("1D2S3T*")); // 59

// Math.pow(n, 2)

// 우선 각 판을 점수화해준다.
// 예제 1; 1, 4, *, 27 (slice?)
// 예제 2; 1, *, 4, *, 27 (slice?)
// 예제 3; 1, #, 4, *, 27 (slice?)

// * : 이전 점수를 각각 2배로 , #: 해당 점수에만 * -1

// *이 발생했을 때 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다.
// #은 그 전값만 -1 곱해주면됨 index - 1 값에 *-1 , 만약 그 전값이 "*"이나, "#"이라면 ?,,
