function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const visited = new Set();
  const queue = [[begin, 0]];

  const isOneDiff = (a, b) => {
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) diff++;
    }
    return diff === 1;
  };

  while (queue.length > 0) {
    const [cur, cnt] = queue.shift();

    if (cur === target) return cnt;

    for (const word of words) {
      if (!visited.has(word) && isOneDiff(cur, word)) {
        visited.add(word);
        queue.push([word, cnt + 1]);
      }
    }
  }

  return 0; // target에 도달하지 못한 경우
}

// 테스트 케이스
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 정답: 4
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 정답: 0 (cog가 없으므로)
