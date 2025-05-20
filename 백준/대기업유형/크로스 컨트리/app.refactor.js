const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {
  const [T, ...rest] = input;
  const result = [];

  for (let t = 0; t < T[0]; t++) {
    const n = rest[t * 2][0]; // 참가자 수
    const runners = rest[t * 2 + 1]; // 팀 번호 배열

    // 1. 팀별 인원 수 계산
    const countMap = new Map();
    for (const team of runners) {
      countMap.set(team, (countMap.get(team) || 0) + 1);
    }

    // 2. 등수 부여 (유효 팀만)
    const ranks = [];
    let rank = 1;
    for (let i = 0; i < runners.length; i++) {
      const team = runners[i];
      if (countMap.get(team) === 6) {
        ranks.push([team, rank]);
        rank++;
      }
    }
    console.log("ranks", ranks);

    // 3. 팀별 등수 모으기
    const teamMap = new Map();
    for (const [team, r] of ranks) {
      if (!teamMap.has(team)) teamMap.set(team, []);
      teamMap.get(team).push(r);
    }
    console.log("teamMap", teamMap);

    // 4. 후보 팀 점수 계산
    const candidates = [];
    for (const [team, teamRanks] of teamMap.entries()) {
      const sorted = teamRanks.sort((a, b) => a - b); // 내림차순
      const sum = sorted.slice(0, 4).reduce((acc, v) => acc + v, 0); // 4등까지
      const fifth = sorted[4]; //5번
      candidates.push([team, sum, fifth]);
    }

    // 5. 정렬 기준: 점수합 → 5번째 → 팀번호
    candidates.sort((a, b) => {
      if (a[1] !== b[1]) return a[1] - b[1];
      if (a[2] !== b[2]) return a[2] - b[2];
      return a[0] - b[0];
    });

    result.push(candidates[0][0]);
  }

  return result.join("\n");
}

console.log(solution(input));
