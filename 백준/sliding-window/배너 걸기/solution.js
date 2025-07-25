const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "))
  .map((line) => line.map((v) => +v));

const isPossible = (map, standard) =>
  [...map.values()].some((v) => v >= standard);

function solution(input) {
  const [[N, M], sections] = input;

  const standard = Math.ceil((9 * M) / 10);

  const hList = new Array(Math.pow(10, 6) + 1).fill(0);
  const windowList = new Array(Math.pow(10, 6) + 1).fill(0);

  sections.forEach((h) => {
    hList[h]++;
  });

  const windowMap = new Map();
  for (let i = 0; i < M; i++) {
    const h = sections[i];

    windowList[h]++;

    if (windowList[h] >= standard) return "YES";
  }

  for (let i = M; i < N; i++) {
    const inH = sections[i];
    const outH = sections[i - M];
    windowList[inH]++;
    windowList[outH]--;
    if (windowList[inH] >= standard) return "YES";
  }

  return "NO";
}

console.log(solution(input));
