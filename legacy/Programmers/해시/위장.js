function solution(clothes) {
  let answer = 1;
  // let obj2 = [];

  // for (let i = 0; i < clothes.length; i++) {
  //   obj2[clothes[i][1]] = (obj2[clothes[i][1]] || 0) + 1;
  // }
  // console.log(obj2);

  let obj = clothes.reduce((acc, type) => {
    acc[type[1]] = acc[type[1]] ? acc[type[1]] + 1 : 1;
    return acc;
  }, {});

  // 같은 형태 return 되게끔
  // let obj = clothes.reduce((obj, type) => (
  //   (obj[type[1]] = obj[type[1]] ? obj[type[1]] + 1 : 1), obj
  //   ),{})
  console.log(obj);

  for (let key in obj) {
    answer *= obj[key] + 1;
    console.log("key", obj[key]);
    console.log("answer", answer);
  }

  return answer - 1;
}

let clothes = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
console.log(solution(clothes));
