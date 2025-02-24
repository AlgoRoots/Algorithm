const getMin = (arr) => Math.min(...arr);
const getMax = (arr) => Math.max(...arr);

function solution(wallpaper) {
  const fileCords = [[], []];

  wallpaper.forEach((i, idx) => {
    const jMap = i.split("");
    jMap.forEach((j, jIdx) => {
      if (j === "#") {
        fileCords[0].push(idx);
        fileCords[1].push(jIdx);
      }
    });
  });

  const yCords = fileCords[0];
  const xCords = fileCords[1];

  const xMin = getMin(xCords);
  const xMax = getMax(xCords) + 1;
  const yMin = getMin(yCords);
  const yMax = getMax(yCords) + 1;

  return [yMin, xMin, yMax, xMax];
}

solution([".#...", "..#..", "...#."]);
