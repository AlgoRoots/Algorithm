function solution(absolutes, signs) {
  //   // for (let i = 0; i < absolutes.length; i++) {
  //   //   if (signs[i] === false) {
  //   //     absolutes[i] *= -1;
  //   //   }
  //   // }

  //   // return absolutes.reduce((acc, cur) => acc + cur, 0);

  return absolutes.reduce((acc, cur, i) => acc + cur * (signs[i] ? 1 : -1));

  //   absolutes.forEach((v, i) => {
  //     if (signs[i] === false) {
  //       absolutes[i] *= -1;
  //     }
  //   });
  //   return absolutes.reduce((acc, cur) => acc + cur, 0);
  // }
}
console.log(solution([4, 7, 12], [true, false, true]));
