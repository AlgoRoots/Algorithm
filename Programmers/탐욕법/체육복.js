function solution(n, lost, reserve) {
  // 0. 전체 체육복수는 현재 5명임

  // 1. 중복의 제거, lost에있는 번호와 reseve에 있는 번호가 같으면 lost, reserve 둘다 배열에서 빼준다 (filter)
  // 1.2 그리고 lost, reserve 모두 정렬도해준다. 이로 인해 자동으로 최댓값이 구해지게 될 것이다.
  // 2. 현재 체육복있는 사람 let curCount = n - lost.length 1에서 중복 제거해서 2 공식이 성립된다.
  // 3. lost 값 하나하나 +=1 쁠마1씩 해서 있는지 보고 있으면 shift()로 배열에서 제거해준다.
  // 근데 lost에서 i = 0부터 length까지 reseve의 개수만큼 하나씩 검사하는 반복문을 만들어야함. for가 두개가생길수도..?

  const lostPure = lost
    .filter((num) => !reserve.includes(num))
    .sort((a, b) => a - b);

  const reservePure = reserve
    .filter((num) => !lost.includes(num))
    .sort((a, b) => a - b);

  console.log(lostPure, reservePure);

  // let curCount = n - lostPure.length;

  // for (let i = 0; i < lostPure.length; i++) {
  //   for (let j = 0; j < reservePure.length; j++) {
  //     if (
  //       reservePure[j] === lostPure[i] - 1 ||
  //       reservePure[j] === lostPure[i] + 1
  //     ) {
  //       curCount++;
  //       reservePure.shift();
  //     }
  //   }
  // }
  // return curCount;

  const curCount = lostPure.filter((a) => {
    return reservePure.find((b, i) => {
      const has = b === a - 1 || b === a + 1;
      if (has) {
        delete reservePure[i];
      }
      return has;
    });
  }).length;
  return n - (lostPure.length - curCount);

  // 두배열 중복제거 방법들
  // let array1 = lost.filter((val) => !reserve.includes(val));
  // console.log(array1);

  // let array1 = lost.filter(function (val) {
  //   return reserve.indexOf(val) == -1;
  // });

  const result = lost.filter((lostNum) => {
    let flag = true;
    reserve.forEach((reserveNum) => {
      if (reserveNum === lostNum) {
        flag = false;
      }
    });
    return flag;
  });

  // console.log(result);
  // console.log(reserve);

  //console.log(array1);

  //return answer;
}
//console.log(solution(	5, [2, 4], [1, 3, 5]); // 5
// console.log(solution(5, [4, 2, 3], [1, 3, 5])); // 5
// console.log(solution(5, [2, 4], [3])); // 5
console.log(solution(3, [3], [1])); // 5
console.log(solution(7, [2, 3, 4], [1, 2, 3, 6])); // 5
