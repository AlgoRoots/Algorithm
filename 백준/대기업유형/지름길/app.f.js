/**
 * @link https://www.acmicpc.net/problem/1446
 */

/**
 * 첫째 줄에 지름길의 개수 N과 고속도로의 길이 D
 * 지름길의 시작 위치, 도착 위치, 지름길의 길이
 * 세준이가 운전해야하는 거리의 최솟값을 출력하시오.
 */
const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N, D], ...info] = input;

  const shortRoad = info.sort((a, b) => a[0] - b[0]);
  const road = Array.from({ length: D + 1 }, (_, i) => i);

  for (let i = 0; i <= D; i++) {
    if (i > 0) road[i] = Math.min(road[i], road[i - 1] + 1);

    for (const [start, end, shortCost] of shortRoad) {
      if (i !== start || end > D) continue;
      if (road[end] > road[start] + shortCost) {
        road[end] = road[start] + shortCost;
      }
    }
  }

  return road[D];
}

console.log(solution(input));
