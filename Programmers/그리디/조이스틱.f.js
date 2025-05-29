const code = (str) => str.charCodeAt(0) - 64;
const toChar = (v) => String.fromCharCode(v + 64);
const mapToChar = (arr) => arr.map(toChar).join("");
const isEqual = (v1, v2) => mapToChar(v1) === mapToChar(v2);

function solution(name) {
  const initial = Array(name.length).fill(1); // [1,1,1,1,1]
  const n = name.length;
  const mid = 13;

  let cnt = 0;
  let temp = initial;
  const target = name.split("").map(code);
  const prev = (i) => (i - 1 + n) % n;
  const next = (i) => (i + 1) % n;

  let cursor = 0;
  let found = false;

  while (!found) {
    const start = temp[cursor];
    const cur = target[cursor]; // j

    if (start !== cur) {
      if (Math.abs(start - cur) > mid) {
        cnt += 26 - cur + 1;
      } else {
        cnt += cur - start;
      }

      temp[cursor] = target[cursor];
    }

    if (isEqual(temp, target)) {
      found = true;
      break;
    }

    if (temp[prev(cursor)] !== target[prev(cursor)]) {
      cursor = prev(cursor);
      cnt += 1;
      continue;
    }

    if (temp[next(cursor)] !== target[next(cursor)]) {
      cursor = next(cursor);
      cnt += 1;
      continue;
    }

    cursor = next(cursor);
  }
  return cnt;
}
solution("BBBAAAAAB");

// solution("JAZ");
// solution("JEROEN");
// console.log(solution("JAN"));
