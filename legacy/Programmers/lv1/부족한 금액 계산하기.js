function solution(price, money, count) {
  let mustPay = 0;

  for (let i = 1; i <= count; i++) {
    mustPay += price * i;
  }

  return mustPay > money ? mustPay - money : 0;
}

console.log(solution(3, 50, 4)); //10
