const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 *
 */


const input = fs.readFileSync(filePath).toString().trim().split('\n').map((v, i) => (i === 0 ? v.split(" ") : v));

// 임스제외
const GAME_LIMIT = {
  Y: 2 - 1,
  F: 3 - 1,
  O: 4 - 1,
};

function solution(input) {
  const [[N, type], ...list] = input;
  const participants = new Set(list);

  const limit = GAME_LIMIT[type];

  let playCnt = 0;
  let recruitment = 0;
  while (participants.size > 0 || participants.size >= limit) {
    [...participants].forEach((p) => {
      participants.delete(p);
      recruitment++;
      if (recruitment === limit) {
        recruitment = 0;
        playCnt++;
      }
    });
  }

  return playCnt;
}

console.log(solution(input));