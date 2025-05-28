function solution(begin, target, words) {
  var answer = 0;

  let min = Infinity;
  const visited = [];
  const bfs = (start, path = [start]) => {
    const queue = [[start, 0]];

    while (queue.length > 0) {
      const [cur, cnt] = queue.shift();
      if (target === cur && words.includes(cur)) {
        console.log("cnt", cnt);
        return cnt;
      }

      for (let i = 0; i < cur.length; i++) {
        const char = cur[i]; //h, i , t
        for (let j = 0; j < words.length; j++) {
          const w = words[j];
          let copy = w.split("");
          copy[i] = char;
          if (cur === copy.join("") && !visited.includes(w)) {
            queue.push([w, cnt + 1]);
            visited.push(w);
          }
        }
      }
    }
    return 0;
  };

  return bfs(begin);
}

// solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]);
solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
