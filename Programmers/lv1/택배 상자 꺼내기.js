const splitArray = (arr, size) =>
  arr.reduce((acc, cur, i) => {
    if (i % size === 0) {
      const unit = arr.slice(i, i + size);
      if (unit.length < size) {
        unit.push(...Array(size - unit.length).fill(0));
      }
      return [...acc, unit];
    } else {
      return acc;
    }
  }, []);

const reverseEven = (arrays) => {
  const isOdd = (num) => num % 2 === 1;
  const result = arrays.map((arr, i) => {
    if (isOdd(i)) return arr.reverse();
    return arr;
  });

  return result;
};

const sortByColumn = (arrays) => {
  const newArray = [];
  arrays.forEach((arr) => {
    arr.forEach((num, i) => {
      if (!newArray[i]) {
        newArray[i] = [];
      }
      newArray[i].push(num);
    });
  });
  return newArray;
};

const getTargetCount = (arrs, target) => {
  for (let arr of arrs) {
    // 0 추가해놓고 마지막에 빼지 않아서 마지막 테스트 케이스 통과 안됐었음..
    const zeroCount = arr.filter((n) => n === 0).length;

    const targetIdx = arr.indexOf(target);
    const hasIdx = targetIdx !== -1;
    if (hasIdx) {
      return arr.length - targetIdx - zeroCount;
    }
  }
  return null;
};

function solution(n, w, num) {
  if (w === 1) {
    return n - num + 1;
  }
  const arr = Array.from(new Array(n), (x, i) => i + 1);
  const splitedArr = splitArray(arr, w);
  const reversedArr = reverseEven(splitedArr);
  const sortedArr = sortByColumn(reversedArr);
  const result = getTargetCount(sortedArr, num);
  return result;
}

console.log(solution(22, 6, 8)); // 3
console.log(solution(13, 3, 6)); // 4
console.log(solution(4, 1, 1)); // 4
console.log(solution(22, 6, 14)); // 1
