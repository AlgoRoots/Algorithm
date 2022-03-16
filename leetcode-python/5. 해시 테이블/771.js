// function numJewelsInStones(jewels, stones) {
//   let result = 0;
//   for (let i = 0; i < stones.length; i++) {
//     if (jewels.indexOf(stones.charAt(i)) >= 0) result++;
//   }
//   return result;
// }

function numJewelsInStones(J, S) {
  const cnt = {};
  for (let i = 0; i < S.length; i += 1) {
    if (!cnt[S[i]]) {
      cnt[S[i]] = 1;
    } else {
      cnt[S[i]] += 1;
    }
  }

  let sum = 0;
  for (let i = 0; i < J.length; i += 1) {
    if (cnt[J[i]]) {
      sum += cnt[J[i]];
    }
  }
  return sum;
}

let J = "aA"
let S = "aAAbbbb"
console.log(numJewelsInStones(J, S))
