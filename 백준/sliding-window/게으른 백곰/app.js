/**
 * @link https://www.acmicpc.net/problem/10025
 */

/**
 * 3:46
 */
const { defineInput, getInput } = require("#helper/input-config-helper");

const inputConfig = defineInput("multiLineSpace", (v) => +v);

const input = getInput(inputConfig);

function solution(input) {
  const [[N, K], ...list] = input;

  const xMap = new Map(
    list.reduce((acc, [amount, x], i) => {
      acc.push([x, amount]);
      return acc;
    }, [])
  );

  const xMin = Math.min(...xMap.keys());
  const xMax = Math.max(...xMap.keys());

  const array = Array.from({ length: xMax + 1 }, (_, i) =>
    xMap.has(i) ? xMap.get(i) : 0
  );
  console.log("array", array);
  console.log({ xMin, xMax });

  // const sorted = list.sort((a, b) => {
  //   return a[1] - b[1];
  // });

  let sum = 0;
  let max = 0;

  for (let x = xMin; x <= xMin + K; x++) {
    const amount = array[x];
    console.log("x", x);
    if (amount === 0) continue;
    sum += amount;
  }
  max = sum;

  return;
}

console.log(solution(input));
