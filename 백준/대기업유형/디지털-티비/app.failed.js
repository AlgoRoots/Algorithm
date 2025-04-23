/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 * @구현
 * @failed
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄();

function solution(input) {
  const [N, ...channels] = input;

  let cursor = 0;
  let answer = "";
  const move = (target) => {
    console.log("channels", cursor, channels);
    let targetIdx = channels.indexOf(target);
    while (cursor < targetIdx) {
      answer += "1";
      cursor++;
    }

    console.log("cursor", cursor);

    while (cursor > 0) {
      console.log("@2channels", cursor, channels);

      answer += "4";
      const temp = channels[cursor];
      channels[cursor] = channels[cursor - 1];
      channels[cursor - 1] = temp;
      cursor--;
    }
  };

  move("KBS1");
  move("KBS2");

  console.log("cursor", cursor, answer);
}

solution(input);
