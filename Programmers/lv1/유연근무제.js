const toTime = (t) => t.toString().padStart(2, "0");
function solution(schedules, timelogs, startday) {
  const weekdays = [6, 0];
  const max = schedules.map((t) => {
    const [h, m] = [Math.floor(t / 100), t % 100];
    if (m >= 50) {
      return +[h + 1, toTime((m + 10) % 60)].join("");
    }
    return +[h, +m + 10].join("");
  });

  let count = 0;

  timelogs.forEach((logs, p) => {
    let pass = 0;
    logs.forEach((t, i) => {
      const curDay = (startday + i) % 7;
      if (weekdays.includes(curDay)) return;
      if (max[p] >= t) {
        pass++;
      }
    });
    if (pass === 5) count++;
  });

  return count;
}
solution(
  [755, 800, 1100],
  [
    [710, 2359, 1050, 700, 650, 631, 659],
    [800, 801, 805, 800, 759, 810, 809],
    [1105, 1001, 1002, 600, 1059, 1001, 1100],
  ],
  5
);
