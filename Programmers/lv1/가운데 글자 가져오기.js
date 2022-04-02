function solution(s) {
  const center = Math.ceil(s.length / 2) - 1;

  return s.length % 2 === 0 ? s[center] + s[center + 1] : s[center];
}

//console.log(solution("abcde"));
console.log(solution("qwer"));
// 123456;
// 34;

// 12345;
// 1234567;
// 4;
