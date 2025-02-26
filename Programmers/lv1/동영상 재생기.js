const toSeconds = (time) => {
  const [min, sec] = time.split(":").map(Number);
  return min * 60 + sec;
};

const secToMinSec = (secs) => {
  const min = Math.floor(secs / 60);
  const sec = secs % 60;
  const mapped = [min, sec].map((t) => t.toString().padStart(2, 0));
  return mapped.join(":");
};

const CMD_MAP = {
  next: 10,
  prev: -10,
};

function solution(video_len, pos, op_start, op_end, commands) {
  const timeInfo = { video_len, pos, op_start, op_end };
  const times = Object.entries(timeInfo).reduce((acc, [key, val]) => {
    acc = { ...acc, [key]: toSeconds(val) };
    return acc;
  }, {});

  const isInOpening = (cur) =>
    times["op_start"] <= cur && times["op_end"] >= cur;
  const isEarly10s = (time) => time < 10;
  const isFinal10s = (time) => times["video_len"] - time < 10;

  const cur = (() => {
    if (isInOpening(times["pos"])) return times["op_end"];
    return times["pos"];
  })();

  console.log("times", times, { cur });
  const resultForSec = commands.reduce((acc, cmd) => {
    let tempPos = acc + CMD_MAP[cmd];

    if (isInOpening(tempPos)) {
      tempPos = times["op_end"];
    }
    if (isEarly10s(tempPos)) {
      tempPos = 0;
    }
    if (isFinal10s(tempPos)) {
      tempPos = times["video_len"];
    }
    if (isInOpening(tempPos)) {
      tempPos = times["op_end"];
    }
    acc = tempPos;
    return acc;
  }, cur);
  console.log(secToMinSec(resultForSec));

  return secToMinSec(resultForSec);
}

// solution("34:33", "13:00", "00:55", "02:55", ["next", "prev"]);
// solution("10:55", "00:05", "00:15", "06:55", ["prev", "next", "next"]); // 06:55
solution("10:00", "00:03", "00:00", "00:05", ["prev", "next"]); // 06:55
// solution("07:22", "04:05", "00:15", "04:07", ["next"]); // 04:17
