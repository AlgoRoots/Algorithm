/**
 * @link https://www.acmicpc.net/problem/20920
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄((v, i) =>
  i === 0 ? v.split(" ").map(Number) : v
);

function solution(input) {
  const [[N, M], ...words] = input;
  const filtered = words.filter((v) => v.length >= M);

  const map = filtered.reduce((acc, cur, i) => {
    if (!acc.has(cur)) acc.set(cur, 1);
    else acc.set(cur, acc.get(cur) + 1);
    return acc;
  }, new Map());

  const set = [...new Set(filtered)];

  set.sort((a, b) => {
    if (map.get(a) !== map.get(b)) return map.get(b) - map.get(a);
    if (a.length !== b.length) return b.length - a.length;
    return a.localeCompare(b);
  });
  return set.join("\n");
}

console.log(solution(input));
