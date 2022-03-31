// 1.
// a: ate
// b: a false
// c: b ate

// a가 거짓말, b가 빵먹음

// 2.
// let a = [1, 3, 6, 11, 19, 31, 48, x]

// 71

//3.
// 15

// i = 1
// i = 8  1+(7*1)
// i = 15 1+(7*2)
// i = 22 1+(7*3)

// 4. 5번 count < 101

// 5. 3번

// 6.

function solution(arr) {
  // const count = arr.reduce((acc, cur) => {
  //   acc[cur] = (acc[cur] || 0) + 1;
  //   return acc;
  // }, []);

  // let result = count.filter((i) => i > 1);
  // return result.length !== 0 ? result : (result = [-1]);

  if (arr.length === 1) return [];

  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.get(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }
  const result = [];

  for (let [key, value] of map) {
    if (value > 1) {
      result.push(value);
    }
  }

  if (result.length === 0) {
    return [-1];
  } else {
    return result;
  }
  //console.log(map);
}

console.log(solution([3, 2, 4, 4, 2, 5, 2, 5, 5]));
console.log(solution([3, 5, 7, 9, 1]));
