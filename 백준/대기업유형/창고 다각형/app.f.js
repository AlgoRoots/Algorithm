/**
 * @link https://www.acmicpc.net/problem/2304
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [N, ...rest] = input;
  const columns = rest.sort((a, b) => a[0] - b[0]);

  let maxH = 0;
  let maxIdx = 0;
  columns.forEach(([x, h], i) => {
    if (h > maxH) {
      maxH = h;
      maxIdx = i;
    }
  });

  let area = 0;

  let [lx, ly] = columns[0];

  for (let i = 1; i <= maxIdx; i++) {
    const [cx, cy] = columns[i];
    if (cy > ly) {
      area += (cx - lx) * ly;
      lx = cx;
      ly = cy;
    }
  }

  let [rx, ry] = columns[N - 1];

  for (let i = N - 2; i >= maxIdx; i--) {
    const [cx, cy] = columns[i];
    if (cy > ry) {
      area += (rx - cx) * ry;
      rx = cx;
      ry = cy;
    }
  }

  area += maxH;

  return area;
}

console.log(solution(input));
