/**
 * @link https://www.acmicpc.net/problem/20125
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄((v, i) => (i !== 0 ? v.split("") : v));

// 왼쪽 팔, 오른쪽 팔, 허리, 왼쪽 다리, 오른쪽 다리의 길이
const body = {
  heart: [],
  left_arm: [],
  right_arm: [],
  waist: [],
  left_leg: [],
  right_leg: [],
};

const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function solution(input) {
  const [N, ...coords] = input;

  const body_coords = coords.reduce((acc, l, y) => {
    l.forEach((v, x) => {
      if (v === "*") acc.push([y, x]);
    });
    return acc;
  }, []);
  const isValid = (y, x) => y >= 0 && x >= 0 && y < +N && x < +N;

  for (let y = 0; y < +N; y++) {
    for (let x = 0; x < +N; x++) {
      console.log("y", y, x);
      if (coords[y][x] === "*") {
        surround = true;
        for (let [dy, dx] of dir) {
          const ny = dy + y;
          const nx = dx + x;
          if (isValid(ny, nx) && coords[ny][nx] !== "*") {
            surround = false;
          }
        }
        if (surround) {
          body.heart = [y, x];
          body.waist = body_coords.filter(([by, bx]) => bx === x && by > y);
          body.left_arm = body_coords.filter(([by, bx]) => bx < x && by === y);
          body.right_arm = body_coords.filter(([by, bx]) => bx > x && by === y);
          const waistEnd = body.waist.at(-1);
          body.left_leg = body_coords.filter(
            ([by, bx]) => bx < waistEnd[1] && by > waistEnd[0]
          );
          body.right_leg = body_coords.filter(
            ([by, bx]) => bx > waistEnd[1] && by > waistEnd[0]
          );
          return;
        }
      }
    }
  }

  // 왼쪽 팔, 오른쪽 팔, 허리, 왼쪽 다리, 오른쪽 다리의 길이
  const { heart, ...rest } = body;

  const heartValue = heart.map((v) => v + 1);
  const length = Object.values(rest).map((v) => v.length);

  const res = [heartValue.join(" "), length.join(" ")];

  return res.join("\n");
}
console.log(solution(input));
