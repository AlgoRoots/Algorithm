const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v, i) => {
    return i === 0 ? v.split(" ").map(Number) : v;
  });

const isSame = (wMap, curMap) => {
  const copy = new Map([...curMap]);
  const wList = [...wMap.entries()];

  wList.forEach(([k, cnt]) => {
    if (copy.has(k)) copy.set(k, copy.get(k) - cnt);
  });
  const sum = [...copy.values()].reduce((acc, cur) => (acc += cur), 0);
  return sum === 0;
};

function solution(input) {
  const [[wLeng, sLeng], W, S] = input;
  const freq = new Map();

  for (const ch of W) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  const curMap = new Map();
  let cnt = 0;

  for (let i = 0; i < wLeng; i++) {
    const ch = S[i];
    curMap.set(ch, (curMap.get(ch) || 0) + 1);
  }

  if (isSame(freq, curMap)) cnt++;

  for (let i = wLeng; i < sLeng; i++) {
    const ch = S[i];
    curMap.set(ch, (curMap.get(ch) || 0) + 1);

    const prev = S[i - wLeng];

    if (curMap.get(prev) === 1) {
      curMap.delete(prev);
    } else {
      curMap.set(prev, curMap.get(prev) - 1);
    }

    if (isSame(freq, curMap)) cnt++;
  }

  return cnt;
}

console.log(solution(input));
