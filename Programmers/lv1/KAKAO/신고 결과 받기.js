function solution(id_list, report, k) {
  let answer = new Array(id_list.length).fill(0);
  const report_list = {};

  id_list.map((user) => {
    report_list[user] = [];
  });
  console.log(report_list);

  report.map((user) => {
    const [user_id, report_id] = user.split(" ");
    if (!report_list[report_id].includes(user_id))
      report_list[report_id].push(user_id);
  });

  console.log(report_list);

  for (const key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].map((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }
  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
