/**
 * @link https://www.acmicpc.net/problem/1283
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기();

function solution(input) {
  const [[n], ...sentences] = input;

  const shortcut = new Set();

  let results = [];

  for (let i = 0; i < sentences.length; i++) {
    const words = sentences[i];
    let marked = false;

    for (let j = 0; j < words.length; j++) {
      const word = words[j];
      if (!shortcut.has(word[0].toLowerCase())) {
        shortcut.add(word[0].toLowerCase());
        words[j] = `[${words[j][0]}]` + words[j].slice(1);
        results.push(words.join(" "));
        marked = true;
        break;
      }
    }

    if (marked) continue;

    const str = words.join(" ");
    const arr = str.split("");

    for (let s = 1; s < str.length; s++) {
      if (str[s] === " ") continue;
      if (!shortcut.has(str[s].toLowerCase())) {
        shortcut.add(str[s].toLowerCase());
        arr[s] = `[${arr[s]}]`;
        results.push(arr.join(""));
        marked = true;
        break;
      }
    }

    if (!marked) results.push(str);
  }

  return results.join("\n");
}

console.log(solution(input));
