function solution(prices) {
  const len = prices.length;
  const answer = Array(len).fill(0);
  const stack = [];

  for (let i = 0; i < len; i++) {
    console.log("i", stack, i, prices[stack.at(-1)]);
    // stack이 있고, 현재 가격이 stack top의 idx가격보다 작을 떄 (가격이 떨어질 때)
    // price[1] 2 < prices[0] 1
    while (stack.length && prices[i] < prices[stack.at(-1)]) {
      console.log("stack", stack);
      const top = stack.pop();
      // 현재 인덱스와 스택에서 꺼낸 인덱스의 차이를 결과 배열에 저장
      answer[top] = i - top;
    }
    //현재 인덱스를 스택에 넣음
    stack.push(i);
  }
  console.log("answer", answer);
  console.log("stack", stack);
  // 남아있는 건 끝까지 안 떨어진 애들 → 끝까지 유지됨
  while (stack.length) {
    const top = stack.pop();
    answer[top] = len - 1 - top;
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
