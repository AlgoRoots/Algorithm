/**
 * @link https://www.acmicpc.net/problem/1593
 */

/**
 * 6:17 7:00
 * 문자열  S안에서 문자열 W의 순열 중 하나가 부분 문자열로 들어있는 모든 경우의 수를 계산하라는 뜻이다.
 */

const { defineInput, getInput } = require("#helper/input-config-helper");

const inputConfig = defineInput("multiLine", (v, i) => {
  return i === 0 ? v.split(" ").map(Number) : v;
});

const input = getInput(inputConfig);

function solution(input) {
  const [[wLen, sLen], W, S] = input;
  const wCount = Array(128).fill(0);
  const sCount = Array(128).fill(0);
  const A = "AB".charCodeAt(0);
  let diff = 0;
  let answer = 0;

  for (let i = 0; i < wLen; i++) {
    wCount[W.charCodeAt(i)]++;
    sCount[S.charCodeAt(i)]++;
  }

  // 초기 diff 계산
  for (let i = 0; i < 128; i++) {
    if (wCount[i] !== sCount[i]) diff++;
  }

  if (diff === 0) answer++;

  for (let i = wLen; i < sLen; i++) {
    const outCh = S.charCodeAt(i - wLen);
    const inCh = S.charCodeAt(i);

    // 나가는 문자 처리
    if (sCount[outCh] === wCount[outCh]) diff++;
    sCount[outCh]--;
    if (sCount[outCh] === wCount[outCh]) diff--;

    // 들어오는 문자 처리
    if (sCount[inCh] === wCount[inCh]) diff++;
    sCount[inCh]++;
    if (sCount[inCh] === wCount[inCh]) diff--;

    if (diff === 0) answer++;
  }

  return answer;
}

console.log(solution(input));
