const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

/**
 * @link https://www.acmicpc.net/problem/
 */

/**
 * 각 팀의 참가 선수 6
 * 상위 네 명의 주자의 점수를 합하여 계산
 * 총 합 낮으면 우승
 * 동점이면 5번째 로 가림
 */

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "))
  .map((line) => line.map(Number));

function solution(input) {
  const [T, ...rest] = input;

  const cases = rest.filter((v, i) => i % 2 !== 0);

  const find = (list) => {
    const group = [0, ...list].reduce(
      (acc, cur, i) => {
        if (!acc[cur]) {
          acc[cur] = [i];
        } else {
          acc[cur].push(i);
        }
        return acc;
      },
      [0]
    );

    let score = 0;
    const rank = [0, ...list].map((v, i) => {
      if (group[v].length < 6) {
        return [v, "n/a"];
      }
      score++;
      return [v, score];
    });

    const teamScore = Array(group.length).fill(0);
    for (let i = 1; i < rank.length; i++) {
      const [team, score] = rank[i];

      if (group[team].length >= 6 && group[team].indexOf(i) < 4) {
        teamScore[team] += score;
      }
    }

    const min = Math.min(...teamScore.filter((v, i) => group[i]?.length === 6));
    const minList = teamScore
      .map((s, t) => (s === min && group[t]?.length === 6 ? [t, s] : undefined))
      .filter((v) => !!v);

    let winner = 0;
    if (minList.length === 1) {
      winner = minList[0][0];
    } else {
      let min = Infinity;
      const targetScore = minList.map(([t, s]) => {
        const targetIdx = group[t][4];
        min = Math.min(min, rank[targetIdx][1]);
        return rank[targetIdx];
      });
      const target = targetScore.filter(([t, s]) => s === min);

      winner = target[0][0];
    }

    return winner;
  };

  let res = [];
  cases.forEach((c) => {
    res.push(find(c));
  });

  return res.join("\n");
}

console.log(solution(input));
