/**
 * @link https://www.acmicpc.net/problem/20437
 */

/**
 * 4:15 ~ 4:40
 * sliding window
 * 
 * 알파벳 소문자로 이루어진 문자열 W가 주어진다.
양의 정수 K가 주어진다.
어떤 문자를 정확히 K개를 포함하는 가장 짧은 연속 문자열의 길이를 구한다.
어떤 문자를 정확히 K개를 포함하고, 문자열의 첫 번째와 마지막 글자가 해당 문자로 같은 가장 긴 연속 문자열의 길이를 구
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄();

function solution(input) {
  const [T, ...rest] = input;
  const cases = rest.reduce((acc, cur, i, org) => {
    if (i % 2 === 0) {
      acc = [...acc, [cur, +org[i + 1]]];
    }
    return acc;
  }, []);

  const find = ([W, K]) => {
    let found = false;
    let minLen = Infinity;
    let maxLen = -1;
    const charMap = new Map();

    for (let i = 0; i < W.length; i++) {
      const c = W[i];
      if (!charMap.has(c)) charMap.set(c, []);
      charMap.get(c).push(i);
    }
    console.log("map", charMap);

    // 각 문자별로 K개 이상 등장한 경우 검사
    for (const [char, positions] of charMap.entries()) {
      // 해당 문자가 K개 미만이라면 조건 불만족이므로 스킵
      if (positions.length < K) continue;
      console.log("positions", positions);
      // position.length K개를 뽑아낼 수 있는 시작 인덱스 범위
      for (let i = 0; i <= positions.length - K; i++) {
        const start = positions[i];
        const end = positions[i + K - 1];
        const len = end - start + 1;
        console.log({ start, end, len });

        if (len < minLen) minLen = len;
        if (W[start] === W[end] && len > maxLen) maxLen = len;
      }
    }

    console.log(minLen === Infinity ? -1 : `${minLen} ${maxLen}`);
  };

  find(["superaquatornado", 2]);
  console.log("input", cases);
}

console.log(solution(input));
