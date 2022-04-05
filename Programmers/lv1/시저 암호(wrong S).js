// testcase 6,7,8 통과 안됨
function solution(s, n) {
  // 65 - 90 대문자
  // 97 - 122 소문자
  let alpha = s.split("").map((num) => num.charCodeAt(num) + n);
  console.log(alpha);
  // String.fromCharCode;

  for (let i = 0; i < alpha.length; i++) {
    //소문자일 떄
    if (
      (alpha[i] > 90 && alpha[i] < 97) ||
      alpha[i] > 122 ||
      (alpha[i] > 97 &&
        String.fromCharCode(alpha[i] - n) ===
          String.fromCharCode(alpha[i] - n).toUpperCase())
    ) {
      alpha[i] -= 26;
    } else if (alpha[i] > 32 && alpha[i] < 65) alpha[i] = 32;
  }

  console.log(alpha);
  return alpha.map((i) => String.fromCharCode(i)).join("");
  // console.log(90 - 65, 122 - 97);
}

// console.log(solution("AB", 1));
// console.log(solution("Z", 1));
// console.log(solution("z", 1));
// console.log(solution("a B z", 4));
console.log(solution("AaZz", 25)); //ZzYy
console.log(solution("a    b", 1)); // "b     c" (O)  "b c" (X)
console.log(solution("a b ", 1)); // "b c  "
