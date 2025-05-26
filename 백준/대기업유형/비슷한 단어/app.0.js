/**
 * @link https://www.acmicpc.net/problem/2607
 */

/**
 * 같은 구성:
 * 두 개의 단어가 같은 종류의 문자로 이루어져 있다.
 * 같은 문자는 같은 개수 만큼 있다.
 *
 * 두 단어가 같은 구성을 갖는 경우,
 * 또는 한 단어에서 한 문자를 더하거나, 빼거나, 하나의 문자를 다른 문자로 바꾸어 나머지 한 단어와 같은 구성을 갖게 되는 경우에 이들 두 단어를 서로 비슷한 단어
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄();

function solution(input) {
  const [N, ...words] = input;

  const char = words.map((str, i) => {
    const charsNum = Array.from({ length: 27 }, (_, i) => 0);

    for (let i = 0; i < str.length; i++) {
      charsNum[str[i].charCodeAt(0) - 64] += 1;
    }

    return charsNum;
  });

  const [target, ...compare] = char;

  let similarlyCnt = 0;

  for (let i = 0; i < compare.length; i++) {
    let diff = 0;
    let plus = 0;
    let minus = 0;
    for (let j = 1; j <= 26; j++) {
      const delta = target[j] - compare[i][j];
      diff += Math.abs(delta);

      if (delta === 1) plus++;
      if (delta === -1) minus++;
    }

    if (
      diff === 0 || // 완전히 같음
      diff === 1 || // 한 글자 추가/삭제
      (diff === 2 && plus === 1 && minus === 1) // 한 글자 교체
    ) {
      similarlyCnt++;
    }
  }

  return similarlyCnt;
}

console.log(solution(input));
