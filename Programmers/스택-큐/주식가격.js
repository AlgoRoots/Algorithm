function solution(prices) {
  var answer = [];
  for (let i = 0; i < prices.length; i++) {
    let sec = 0;

    for (let j = i + 1; j < prices.length; j++) {
      // 가격 떨어졌을 때
      if (prices[i] > prices[j]) {
        sec++;
        break;
      } else {
        sec++;
      }
    }
    answer.push(sec);
  }
  return answer;
}
