const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/17266
 */

/**
 * 가로등의 높이가 H라면 왼쪽으로 H, 오른쪽으로 H만큼 주위를 비춘다.
 * 굴다리의 길이 N을 모두 비추기 위한 가로등의 최소 높이를 출력한다.
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "))
  .map((line) => line.map(Number));

function solution(input) {
  const [[N], [M], pos] = input;

  for (let h = 1; h <= N; h++) {
    const visited = Array(N + 1).fill(false);

    pos.forEach((p) => {
      const [min, max] = [Math.max(p - h, 0), Math.min(p + h, N)];
      for (let i = min; i <= max; i++) {
        visited[i] = true;
      }
    });

    const isAllVisited = visited.every((v) => !!v);

    if (isAllVisited) {
      return h;
    }
  }
}

console.log(solution(input));
