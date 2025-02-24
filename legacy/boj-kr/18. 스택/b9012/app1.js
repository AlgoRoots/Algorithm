const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const cases = Number(input[0]);
let answer = "";

// 가장 간단한 방식 ( = +1    ) = -1 해줘서 test = 0 이면 Pair 아니면 unpair
function soulution() {
  for (let i = 1; i <= cases; i++) {
    let test = 0;
    let splited = input[i].split("");
    for (let j in splited) {
      // ) ( ) 인경우 +1 -1 -1 = -1 음수일 가능성있음 이럼 짝이 안맞으므로 break;
      if (test < 0) {
        break;
      } else {
        if (splited[j] === "(") {
          test += 1;
        } else {
          test -= 1;
        }
      }
    }
    if (test === 0) {
      answer += "YES" + "\n";
    } else {
      answer += "NO" + "\n";
    }
  }
  console.log(answer);
}

soulution();
