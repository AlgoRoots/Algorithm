function solution(digits) {
  if (digits.length === 0) return [];
  // global result
  let result = [];

  // alpha hash map
  const alpha = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  for (const digit of digits) {
    const charCases = alpha[digit];
    console.log("c", charCases);

    if (result.length === 0) {
      result = result.concat(charCases);
      console.log("r", result);
      continue;
    }

    const newResult = [];
    for (const resultString of result) {
      for (const charCase of charCases) {
        newResult.push(resultString + charCase);
      }
    }
    result = newResult;
  }
  return result;
}

let digits = "23";
console.log(solution(digits));
