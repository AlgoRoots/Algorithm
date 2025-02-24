function solution(record) {
  let splited = record.map((item) => item.split(" "));
  console.log("splited", splited);
  let answer = [];
  //console.log([a, b, c]);
  let chatUser = new Object();
  for (let i = 0; i < splited.length; i++) {
    if (splited[i][0] === "Enter") {
      chatUser[splited[i][1]] = splited[i][2];
    }
    if (splited[i][0] === "Change") {
      chatUser[splited[i][1]] = splited[i][2];
      if (Object.keys(chatUser).includes(splited[i][1]))
        splited[i][2] = chatUser[splited[i][1]];
    }
  }

  console.log("chatUse", chatUser);
  // console.log("chatUseKey", Object.keys(chatUser));
  // console.log("chatUseKey", Object.keys(chatUser).includes(splited[0][1]));
  // console.log("nicname:", chatUser[splited[0][1]]);
  // console.log("origin:", splited[0][2]);

  for (let i = 0; i < record.length; i++) {
    if (splited[i][0] === "Enter") {
      answer.push(`${chatUser[splited[i][1]]}님이 들어왔습니다.`);
    }
    if (splited[i][0] === "Leave") {
      answer.push(`${chatUser[splited[i][1]]}님이 나갔습니다.`);
    }
  }
  return answer;
  console.log("splited", splited);
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
