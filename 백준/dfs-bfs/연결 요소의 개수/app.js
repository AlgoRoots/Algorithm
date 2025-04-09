/**
 * @link https://www.acmicpc.net/problem/11724
 */

/**
 *
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N, M], ...list] = input;

  const map = list.reduce((acc, [k, v]) => {
    if (!acc.has(k)) acc.set(k, []);
    if (!acc.has(v)) acc.set(v, []);

    acc.get(k).push(v);
    acc.get(v).push(k);
    return acc;
  }, new Map());

  const visited = Array.from({ length: N + 1 }, () => false);

  let linkedCnt = 0;

  const dfs = (start) => {
    if (!map.has(start)) return;
    visited[start] = true;
    const nearList = map.get(start);
    nearList?.forEach((n) => {
      if (!visited[n]) {
        dfs(n);
      }
    });
    return list;
  };

  for (let v = 1; v <= N; v++) {
    if (!visited[v]) {
      dfs(v);
      linkedCnt++;
    }
  }

  console.log(linkedCnt);
}

solution(input);
