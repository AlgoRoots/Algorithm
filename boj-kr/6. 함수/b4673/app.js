// solution();

// function d(num) {
//   let sum = 0;
//   const strNum = String(num);
//   for (let i = 0; i < strNum.length; i++) {
//     sum += +strNum[i];
//   }
//   return num + sum;
// }

// function solution(n) {
//   const arr = Array(11).fill(0);
//   console.log(arr);
//   for (let i = 1; i <= 10; i++) {
//     const ans = d(i);
//     console.log(`d(${i}):  `, ans);
//     if (ans <= 10) {
//       arr[ans]++;
//     }
//   }
//   console.log(`arr :`, arr);

//   for (let i = 1; i <= 10; i++) {
//     if (arr[i] === 0) {
//       console.log(i);
//     }
//   }
// }

solution();

function solution() {
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    let sum = 0;
    let strNum = String(i);
    for (let j = 0; j < strNum.length; j++) {
      sum += +strNum[j];
    }
    let newNum = i + sum;
    //console.log(`newNum: `, newNum);
    arr.push(newNum);
  }
  console.log("arr: ", arr);

  for (let i = 1; i <= 10; i++) {
    if (arr.indexOf(i) === -1) {
      console.log(i);
    }
  }
}
