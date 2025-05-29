function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    const digit = number[i];
    console.log(`\n현재 숫자: ${digit} (index ${i})`);
    console.log(`현재 스택: [${stack.join("")}]`);

    while (k > 0 && stack.length > 0 && stack[stack.length - 1] < digit) {
      const removed = stack.pop();
      k--;
      console.log(`  → ${removed} 제거 (남은 k: ${k})`);
      console.log(`  → 변경된 스택: [${stack.join("")}]`);
    }

    stack.push(digit);
    console.log(`  → ${digit} 추가 후 스택: [${stack.join("")}]`);
  }

  // 제거 안 끝났으면 뒤에서 자르기
  if (k > 0) {
    console.log(`\n⛔ 아직 ${k}개 더 제거 필요 → 뒤에서 제거`);
  }

  const result = stack.slice(0, number.length - k).join("");
  console.log(`\n최종 결과: ${result}`);
  return result;
}

console.log(solution("987654321", 3));
// console.log(solution("1924"));
