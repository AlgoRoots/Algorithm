// 시간초과 ㅠㅠ

function solution(n) {
  let count = 1;

  if (n === 2) {
    return 1;
  }

  for (let i = 3; i <= n; i++) {
    console.log("i : ", i);
    for (let j = 2; j < i; j++) {
      console.log("j: ", j);
      if (i % j === 0) break;
      if (j === i - 1) count++;
    }
  }

  return count;
}
console.log(solution(10));

// n 10
// 2,3,4,5,6,7,8,9,10

// 2 1,2
// 3, 1,3
// 4, 1,2,4
// 5, 1, 5
// 6, 1, 2, 3, 6
// 13, 1, 13

// i % i-1 ! == 0

// 2%3. 2%4,
// while( i > 10){

// }

// 1과 자기 자신만 % 0이되어야함

// 1,i를 배열에서 뺀다 ? filter  3,4,5,6 여기서 0이하나라도있으면
// 2 % 3 =1
