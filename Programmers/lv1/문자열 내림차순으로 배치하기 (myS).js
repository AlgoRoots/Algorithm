function solution(s) {
  const upper = [];
  const lower = [];
  let alpha = s
    .split("")
    .sort()
    .reverse()
    .filter((num) =>
      num === num.toLowerCase() ? lower.push(num) : upper.push(num)
    );

  console.log(alpha, lower, upper);

  return lower.concat(upper).join("");
}

console.log(solution("ZbcAefg"));
console.log(solution("ZbacaAefg"));
