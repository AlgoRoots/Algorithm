function solution(word) {
  const chars = ["A", "E", "I", "O", "U"];
  const result = [];
  let found = false;

  const dfs = (current, depth = 0) => {
    const indent = "  ".repeat(depth); // 깊이만큼 들여쓰기

    if (found || current.length > 5) {
      console.log(`${indent}⛔ return - current: "${current}"`);
      return;
    }

    if (current.length > 0) {
      result.push(current);
      console.log(`${indent}✅ push: "${current}" (length: ${current.length})`);

      if (current === word) {
        console.log(`${indent}🎯 FOUND! "${current}"`);
        found = true;
        return;
      }
    }

    for (let i = 0; i < chars.length; i++) {
      console.log(`${indent}→ next: "${current + chars[i]}"`);
      dfs(current + chars[i], depth + 1);
    }
  };

  dfs("");
  return result.indexOf(word) + 1;
}

solution("AAAE");
