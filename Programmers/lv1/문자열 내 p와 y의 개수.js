function solution(s) {
  newS = s.toLowerCase();
  let pCount = 0;
  let yCount = 0;

  for (let c of newS) {
    if (c === "p") pCount++;
    if (c === "y") yCount++;
  }
  return pCount === yCount ? true : false;
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));
console.log(solution("ooo"));
