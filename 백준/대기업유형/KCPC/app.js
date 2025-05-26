/**
 * @link https://www.acmicpc.net/problem/3758
 */

/**
 * 풀이를 제출한 팀의 ID, 문제 번호, 점수가 서버의 로그에 제출되는 시간 순서대로 저장
 * 한 문제에 대한 풀이를 여러 번 제출할 수 있는데, 그 중 최고 점수가 그 문제에 대한 최종 점수가 된다.
 * 만약 어떤 문제에 대해 풀이를 한번도 제출하지 않았으면 그 문제에 대한 최종 점수는 0점이다
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [[N], ...rest] = input;
  const cases = Array.from({ length: N }, () => [[], []]);
  let i = 0;

  rest.forEach((l, idx) => {
    if (l.length === 4) {
      const m = l[3];
      cases[i][0] = l;
      cases[i][1] = rest.slice(idx + 1, idx + 1 + m);
      i++;
    }
  });

  const find = (_case) => {
    // t가 몇순위인지 출력
    // n:팀 개수 k:문제개수 t: 내 팀 m: 로그엔트리
    const [[n, k, t, m], submitted] = _case;

    const teamInfo = submitted.reduce((acc, [i, j, s], idx) => {
      if (!acc[i]) {
        const tasks = Array.from({ length: k + 1 }, () => 0);
        tasks[j] = s;
        acc[i] = {
          lastSubmitOrder: idx,
          scores: tasks,
          totalScore: s,
          submittedCnt: 1,
        };
      } else {
        const updatedScores = acc[i].scores.map((curScore, i) => {
          if (i === j) return Math.max(s, curScore);
          return curScore;
        });

        acc[i] = {
          scores: updatedScores,
          lastSubmitOrder: idx,
          totalScore: updatedScores.reduce((acc, cur) => acc + cur, 0),
          submittedCnt: acc[i].submittedCnt + 1,
        };
      }
      return acc;
    }, {});

    const teamRank = Array(n + 1).fill(0);
    for (let t = 1; t <= n; t++) {
      let rank = 1;
      const curTeam = teamInfo[t];
      for (let c = 1; c <= n; c++) {
        if (t === c) continue;
        const anotherTeam = teamInfo[c];
        if (anotherTeam.totalScore > curTeam.totalScore) {
          rank++;
        }

        if (anotherTeam.totalScore === curTeam.totalScore) {
          // 제출횟수 높으면 등수 내려감
          if (anotherTeam.submittedCnt < curTeam.submittedCnt) {
            rank++;
            continue;
          }

          // 합산점수와 제출횟수가 같을 경우
          if (anotherTeam.submittedCnt === curTeam.submittedCnt) {
            // 마지막 제출시간 더 늦으면(숫자가 더 크면 ) 등수 내려감
            if (anotherTeam.lastSubmitOrder < curTeam.lastSubmitOrder) {
              rank++;
              continue;
            }
          }
        }
      }
      teamRank[t] = rank;
    }

    return teamRank[t];
  };

  const res = cases.map((c) => find(c));

  return res.join("\n");
}

console.log(solution(input));
