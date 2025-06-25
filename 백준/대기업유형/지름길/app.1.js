/**
 * @link https://www.acmicpc.net/problem/1446
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N, D], ...shortcut] = input;
  shortcut.sort((a, b) => a[0] - b[0]);

  const road = Array.from({ length: D + 1 }, (_, i) => i);
  for (let dist = 1; dist <= D; dist++) {
    if (dist > 0) road[dist] = Math.min(road[dist], road[dist - 1] + 1);
    for (const [start, end, shortCost] of shortcut) {
      if (shortCost < road[end] - road[start]) {
        road[end] = road[start] + shortCost;
      }
    }
  }

  return road[D];
}

console.log(solution(input));
