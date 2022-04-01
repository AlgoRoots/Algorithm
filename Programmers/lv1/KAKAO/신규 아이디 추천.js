function solution(new_id) {
  let answer = new_id.toLowerCase();

  console.log(answer);

  // answer = answer.replace(/[^a-z0-9-_.]/g, "");
  // \w word문자

  answer = answer.replace(/[^\w-_.]/g, "");
  console.log(answer);

  // answer = answer.replace(/\.+/g, ".");
  answer = answer.replace(/\.{2,}/g, ".");
  console.log(answer);

  answer = answer.replace(/^\.|\.$/g, "");

  // if (answer === "") {
  //   answer += "a";
  // }
  answer = answer.replace(/^$/, "a");

  // if (answer.length >= 16) {
  //   answer = answer.slice(0, 16);
  //   answer = answer.replace(/\.$/, "");
  // }
  answer = answer.slice(0, 15).replace(/\.$/, "");

  // while (answer.length <= 2) {
  //   answer += answer.charAt(answer.length - 1);
  // }

  return answer.padEnd(3, answer[answer.length - 1]);
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
