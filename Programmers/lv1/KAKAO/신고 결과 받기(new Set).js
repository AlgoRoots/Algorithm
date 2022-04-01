function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });
  console.log("reports", reports);
  let counts = new Map();
  console.log("counts", counts);

  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
    console.log("bad", bad);
  }

  console.log("counts", counts);

  console.log("----------");

  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
    console.log("report", report);
    console.log("good", good);
  }

  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}

console.log(
  // solution(
  //   ["muzi", "frodo", "apeach", "neo"],
  //   ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  //   2
  // )
  solution(
    ["con", "ryan", "apeach"],
    ["ryan con", "ryan con", "ryan con", "ryan con", "apeach con"],
    2
  )
);
