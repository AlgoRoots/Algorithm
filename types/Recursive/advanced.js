/**
 * capitalizeFirst라는 재귀 함수를 작성하시오. 문자열 배열이 주어지면 배열에 있는 각 문자열의 첫 글자를 대문자로 바꿔주는 함수입니다.
 */
function capitalizeFirst(arr) {
  const newArr = [];
  if (arr.length === 0) return newArr;
  const newChar = arr[0].slice(0, 1).toUpperCase() + arr[0].slice(1);
  newArr.push(newChar);
  return newArr.concat(capitalizeFirst(arr.slice(1)));
}

// console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']

/**
 * nestedEvenSum이라는 재귀 함수를 작성하시오. 중첩된(nested) 객체를 포함할 수 있는 객체에서 모든 짝수의 합계를 반환하는 함수입니다.
 */
function nestedEvenSum(obj) {
  let count = 0;

  const val = Object.values(obj);
  console.log("val", val);
  val.forEach((v) => {
    if (typeof v === "object") {
      return (count += nestedEvenSum(v));
    }
    if (typeof v === "number" && v % 2 === 0) {
      count += v;
    }
  });

  return count;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

// console.log(nestedEvenSum(obj1)); // 6
// nestedEvenSum(obj2); // 10

/**
 * capitalizeWords라는 재귀 함수를 작성하시오. 단어 배열이 주어지면 각 단어가 대문자로 표시된 새 배열을 반환합니다.
 */
function capitalizeWords(arr) {
  const result = [];

  if (arr.length === 0) return result;
  result.push(arr[0].toUpperCase());
  return result.concat(capitalizeWords(arr.splice(1)));
}

// console.log(capitalizeWords(["car", "taco", "banana"])); // ['CAR','TACO','BANANA']

/**
 * 객체를 받아 숫자인 모든 값을 찾아 문자열로 변환하는 StringifyNumbers라는 함수를 작성하시오. 재귀(Recursion) 함수는 이 문제를 해결하는 좋은 방법이 될 것입니다!
 */

function stringifyNumbers(obj) {
  let newObj = {};
  const entries = Object.entries(obj);
  entries.forEach(([key, val]) => {
    if (typeof val === "object" && !Array.isArray(val)) {
      return (newObj[key] = stringifyNumbers(val));
    }
    if (typeof val === "number") {
      return (newObj[key] = val.toString());
    }
    newObj[key] = val;
  });

  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
// console.log(stringifyNumbers(obj));

/**
 * 객체를 받아들이고 문자열에 해당하는 모든 값의 배열을 반환하는 collectStrings라는 함수를 작성합니다.
 */

// 순수함수
function collectStrings(obj) {
  let results = [];

  const vals = Object.values(obj);
  vals.forEach((v) => {
    if (typeof v === "object") {
      results = results.concat(collectStrings(v));
    }
    if (typeof v === "string") {
      return results.push(v);
    }
  });

  return results;
}

/**
 * 헬퍼 함수
 */

function collect(obj) {
  const results = [];
  const help = (obj2) => {
    const vals = Object.values(obj2);

    vals.forEach((v) => {
      if (typeof v === "object") {
        help(v);
      }
      if (typeof v === "string") {
        results.push(v);
      }
    });
  };

  help(obj);

  return results;
}
const obj3 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collect(obj3)); // ["foo", "bar", "baz"])
