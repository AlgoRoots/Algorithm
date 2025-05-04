function solution(s) {
  if (s[0] === ")" || s[s.length - 1] === "(") return false;

  const stack = ["("];

  for (let i = 1; i < s.length; i++) {
    const last = stack.at(-1);
    if (last === "(" && s[i] === ")") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
}
