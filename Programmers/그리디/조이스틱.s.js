const code = (str) => str.charCodeAt(0) - 64;
const toChar = (v) => String.fromCharCode(v + 64);
const mapToChar = (arr) => arr.map(toChar).join("");
const isEqual = (v1, v2) => mapToChar(v1) === mapToChar(v2);

function solution(name) {
  const initial = Array(name.length).fill(1); // 'A' == 1
  const n = name.length;

  let cnt = 0;
  let temp = [...initial];
  const target = name.split("").map(code);

  let cursor = 0;

  while (true) {
    const start = temp[cursor];
    const cur = target[cursor];
    if (start !== cur) {
      const diff = Math.abs(start - cur);
      cnt += Math.min(diff, 26 - diff);
      temp[cursor] = cur;
    }

    if (isEqual(temp, target)) break;

    let minDist = Infinity;
    let nextIdx = cursor;

    for (let i = 1; i < n; i++) {
      const right = (cursor + i) % n;
      const left = (cursor - i + n) % n;

      if (temp[right] !== target[right]) {
        minDist = i;
        nextIdx = right;
        break;
      }

      if (temp[left] !== target[left]) {
        minDist = i;
        nextIdx = left;
        break;
      }
    }

    cursor = nextIdx;
    cnt += minDist;
  }
  console.log("cnt", cnt);
  return cnt;
}

// solution("BBBAAAAAB");
solution("JAZ");
// solution("JEROEN");
// solution("JAN");
