const sumCord = (cur, acc) => acc.map((n, i) => n + cur[i]);

const isNegative = (n) => n < 0;

const addOne = (delta, val) => {
  if (delta === 0) return val;
  return isNegative(delta) ? val - 1 : val + 1;
};

const directionMap = {
  E: [0, 1],
  W: [0, -1],
  S: [1, 0],
  N: [-1, 0],
};
// E + [0,+1] W [0,-1] S [+1,0] N [-1,0]
// 0,0  0,1 0,2
// 1,0  1,1 1,2
// 2,0  2,1 2,2
function solution(park, routes) {
  const cord = routes.map((routeStr) => {
    const [dir, steps] = routeStr.split(" ");
    const targetCord = directionMap[dir];
    const targetIdx = targetCord.findIndex((n) => n !== 0);
    const updated = targetCord.map((n, i) => (i === targetIdx ? n * steps : n));
    return updated;
  });

  const parkMap = park.map((char) => char.split(""));
  // 0,0 0,2
  // 3,0 3,2
  const maxX = parkMap[0].length - 1;
  const maxY = parkMap.length - 1;
  const parkBoundary = [
    [0, 0],
    [0, maxX],
    [maxY, 0],
    [maxY, maxX],
  ];

  const startCord = parkMap.reduce(
    (acc, cur, idx) => {
      const startIdx = cur.indexOf("S");
      if (startIdx !== -1) acc = [idx, startIdx];
      return acc;
    },
    [0, 0]
  );

  //parkMap [["O","S","O"],["O","O","O"],["O","X","O"],["O","O","O"]]
  // startCord [ 0, 1 ]
  //cord [[0,2],[3,0],[0,-1]]
  //parkBoundary  [[0,0],[0,2],[3,0],[3,2]]

  const isOutOfPark = (curCord) => {
    if (curCord[0] < 0 || curCord[0] > maxY) return true;
    if (curCord[1] < 0 || curCord[1] > maxX) return true;
    return false;
  };

  const result = cord.reduce((acc, cur, idx) => {
    const targetCord = sumCord(cur, acc);
    if (isOutOfPark(targetCord)) return acc;

    const targetY = acc[0] + cur[0];
    const targetX = acc[1] + cur[1];

    let [y, x] = acc;
    while (y !== targetY || x !== targetX) {
      const sumY = addOne(cur[0], y);
      const sumX = addOne(cur[1], x);
      const isBlock = parkMap[sumY][sumX] === "X";
      if (isBlock) return acc;
      y = sumY;
      x = sumX;
    }

    return [y, x];
  }, startCord);

  return result;
}

console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]));
