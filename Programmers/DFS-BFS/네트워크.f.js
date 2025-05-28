function solution(n, computers) {
  let answer = 0;

  const visited = Array(n).fill(false);
  const bfs = (start) => {
    const queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
      console.log("queue", queue);
      const node = queue.shift();
      const list = computers[node];

      list.forEach((nx, next) => {
        if (!visited[next] && computers[node][next] === 1) {
          visited[next] = true;
          queue.push(next);
        }
      });
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(i);
      answer++;
    }
  }

  console.log("answer", answer);
  return answer;
}

// solution(3, [
//   [1, 1, 0],
//   [1, 1, 0],
//   [0, 0, 1],
// ]);
solution(3, [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
]);
