function solution(participant, completion) {
  var answer = "";

  const pMap = new Map();
  const cMap = new Map();

  participant.forEach((p) => {
    if (!pMap.has(p)) return pMap.set(p, 1);
    pMap.set(p, pMap.get(p) + 1);
  });

  completion.forEach((c) => {
    if (!cMap.has(c)) return cMap.set(c, 1);
    cMap.set(c, cMap.get(c) + 1);
  });

  const pList = [...pMap];
  const res = [];

  pList.forEach(([p, count]) => {
    if (count - (cMap.get(p) || 0) > 0) {
      res.push(p);
    }
  });

  return res.join("");
}
