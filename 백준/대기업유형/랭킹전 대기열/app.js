/**
 * @link https://www.acmicpc.net/problem/20006
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기();

function solution(input) {
  const [[p, m], ...rest] = input;

  const players = new Set(rest);

  let roomIdx = 0;
  const roomsMap = new Map();

  while (players.size > 0) {
    roomsMap.set(roomIdx, new Set());

    const curRoom = roomsMap.get(roomIdx);

    for (const player of players) {
      if (curRoom.size === 0) {
        curRoom.add(player);
        players.delete(player);
        continue;
      }

      const [level, id] = player;
      const [baseLevel, _] = [...curRoom][0];

      if (curRoom.size < +m && Math.abs(+level - +baseLevel) <= 10) {
        curRoom.add(player);
        players.delete(player);
      }
      if (curRoom.size === +m) {
        break;
      }
    }

    roomIdx++;
  }
  const rooms = [...roomsMap.values()].map((room, roomIdx) => {
    const state = room.size === +m ? "Started!" : "Waiting!";
    const players = [...room]
      .sort(([_, a], [__, b]) => a.localeCompare(b))
      .map((arr) => arr.join(" "));

    return [state, ...players];
  });

  return rooms.flat().join("\n");
}

console.log(solution(input));
