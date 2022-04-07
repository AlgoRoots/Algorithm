// %1234567 하기 전에 이미 정수 범위를 넘어선다.
// (A+B)%C = ((A%C)+(B%C))%C

// 문제에서 1234567로 나눈 나머지를 정답으로 내놓으라는 것은 문제를 꼰 것이 아니라
//  int 자료형의 범위 내에 항상 값이 있을 수 있도록 한 배려이며, 자료형의 크기에 제한이 있는 언어를 쓸 경우
//   (A + B) % C ≡ ( ( A % C ) + ( B % C) ) % C라는 성질을 이용해서
//  매번 계산 결과에 1234567으로 나눈 나머지를 대신 넣는 것으로 int 범위 내에 항상 값이 존재함을 보장할 수 있다.

function solution(n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push((arr[arr.length - 2] + arr[arr.length - 1]) % 1234567);
  }

  return arr[arr.length - 1];
  console.log(arr);
}

//console.log(solution(3)); // 2
console.log(solution(5)); // 5

// 2   0 + 1 = 1     1
// 3   1 + 1 = 2     2
// 4   1 + 2 = 3     3
//     2 + 3 = 5
//     3 + 5 = 8
//     5 + 8 = 13
