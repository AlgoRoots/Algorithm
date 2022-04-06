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

// arr = [1,2,3,3,3,3,4,4] 3은 4번, 4는 2번씩 나타나므로 [4,2] 를 반환합니다.
// arr = [3,2,4,4,2,5,2,5,5] 이면 2가 3회,4가 2회, 5가 3회 나타나므로 [3,2,3]를 반환합니다.
// [3,5,6,7,1]에서 중복을 나타나는 숫자는 없으므로 [-1]을 반환합니다.
// 제한 사항
// 배열 arr의 길이는 1이상 100 이하의 자연수 입니다.
// 배열 arr의 원소는 1이상 100 이하의 자연수입니다.
// https://m.blog.naver.com/boostcamp_official/222388429782

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
