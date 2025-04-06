const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

/**
 * @link https://www.acmicpc.net/problem/1260
 */

let input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.split(' ').map(Number));
// console.log("input", input);

function solution(input) {
  const [[vertexLength, edge, start], ...lists] = input;
  const adjacencyList = new Map();
  lists.forEach(([v, neighbor]) => {
    if (!adjacencyList.has(v)) adjacencyList.set(v, new Set());
    if (!adjacencyList.has(neighbor)) adjacencyList.set(neighbor, new Set());
    adjacencyList.get(v).add(neighbor);
    adjacencyList.get(neighbor).add(v);
  });
  const dfs = (start) => {
    const result = [];
    const visited = new Set();
    const traversal = (v) => {
      visited.add(v);
      result.push(v);
      const nearList = [...(adjacencyList.get(v) || [])].sort((a, b) => a - b);
      nearList.forEach((n) => {
        if (!visited.has(n)) return traversal(n);
      });
    };
    traversal(start);

    return result;
  };

  const bfs = (start) => {
    const queue = [start];
    const result = [];
    const visited = new Set();

    while (queue.length) {
      const cur = queue.shift();
      if (!visited.has(cur)) {
        visited.add(cur);
        result.push(cur);
        const nearList = [...(adjacencyList.get(cur) || [])].sort(
          (a, b) => a - b
        );
        nearList.forEach((n) => {
          if (!visited.has(n)) queue.push(n);
        });
      }
    }

    return result;
  };

  // console.log(dfs(start));
  // console.log(bfs(start));

  const dfsResult = dfs(start).join(" ");
  const bfsResult = bfs(start).join(" ");

  console.log(`${dfsResult}\n${bfsResult}`);
}

solution(input);