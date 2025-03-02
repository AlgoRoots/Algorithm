function solution(bandage, health, attacks) {
  const [castTime, healing, bonusHealing] = bandage;

  const attacksMap = new Map(attacks);
  const timeEnd = [...attacksMap].pop()[0];

  let points = health;
  let streakPoints = 0;

  for (let t = 1; t <= timeEnd; t++) {
    if (attacksMap.has(t)) {
      const damage = attacksMap.get(t);
      streakPoints = 0;
      points -= damage;
    } else {
      streakPoints++;
      points += healing;
    }

    console.log("streakPoints", points, streakPoints);

    if (streakPoints === castTime) {
      points += bonusHealing;
      streakPoints = 0;
    }

    if (points > health) {
      points = health; // 최대체력초과시 최대체력으로 셋해줘야되는데 기존 체력으로 셋해주고 있었음
    }

    if (points <= 0) {
      points = -1;
      break;
    }
  }
  return points;
}

// solution([2, 4, 4], 100, [
//   [1, 96],
//   [18, 1],
// ]); //99

// solution([2, 4, 4], 20, [
//   [1, 10],
//   [2, 9],
//   [6, 16],
// ]); //1

// solution([1, 10, 10], 5, [
//   [97, 4],
//   [99, 4],
// ]); // 1
// // -1;

// solution([5, 1, 5], 30, [
//   [2, 10],
//   [9, 15],
//   [10, 5],
//   [11, 5],
// ]); // 5

// solution([3, 2, 7], 20, [
//   [1, 15],
//   [5, 16],
//   [8, 6],
// ]); //-1

// solution([4, 2, 7], 20, [
//   [1, 15],
//   [5, 16],
//   [8, 6],
// ]); //-1
// solution([1, 1, 1], 5, [
//   [1, 2],
//   [3, 2],
// ]); // 3

/**
 * 다른 접근 방식
 * 매 초 조회하지 않고, attack 횟수로만 조회
 */

// function solution(bandage, health, attacks) {
//   let currHealth = health;
//   let currTime = 0;

//   for (let [attackTime, damage] of attacks) {
//     let diffTime = attackTime - currTime - 1;
//     currHealth += diffTime * bandage[1] + Math.floor(diffTime / bandage[0]) * bandage[2];

//     if (currHealth > health) currHealth = health;
//     currHealth -= damage;
//     if (currHealth <= 0) return -1;
//     currTime = attackTime;
//   }

//   return currHealth;
// }
