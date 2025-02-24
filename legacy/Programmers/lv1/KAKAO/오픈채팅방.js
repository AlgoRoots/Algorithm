function solution(record) {
  let answer = [];
  const users = {};
  record.map((history) => {
    const [action, id, name] = history.split(" ");
    if (action !== "Leave") users[id] = name;
  });

  // 키는 중복되지 않는다..! 덮어씌워진다..!

  record.map((history) => {
    const [action, id, name] = history.split(" ");
    if (action === "Enter") answer.push(`${users[id]}님이 들어왔습니다.`);
    if (action === "Leave") answer.push(`${users[id]}님이 나갔습니다.`);
  });

  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
