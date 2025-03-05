// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  if (str.length === 1) return str;
  return str[str.length - 1] + reverse(str.slice(0, length - 1));
}

function reverseA(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

// console.log(isPalindrome("awesome")); // false
// console.log(isPalindrome("foobar")); // false
// console.log(isPalindrome("tacocat")); // true
// isPalindrome("amanaplanacanalpanama"); // true
// console.log(isPalindrome("amanaplanacanalpandemonium")); // false

function isPalindrome(str) {
  if (str.length % 2 === 0) return false;
  if (str.length === 1) return true;

  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
}

function isPalindromeA(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

/**
 * 배열과 콜백을 받아들이는 someRecursive 라는 재귀(recursive) 함수를 작성하시오.
 * 이 함수는 배열의 단일 값이 콜백에 전달될 때 true를 반환하면 true를 반환합니다. 그렇지 않으면 false를 반환합니다.
 */

// const isOdd = (val) => val % 2 !== 0;
// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
// someRecursive([4,6,8,9], isOdd) // true
// console.log(someRecursive([4, 6, 8], isOdd)); // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, fn) {
  if (arr.length === 1) return fn(arr[0]);
  if (!fn(arr[0])) {
    return someRecursive(arr.slice(1), fn);
  }
  return true;
}

function someRecursiveA(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}

function flatten(arr) {
  const list = [];
  const helper = (arr) => {
    if (arr.length === 0) return;
    const val = arr[0];
    if (Array.isArray(val)) {
      helper(val);
    } else {
      list.push(val);
    }

    helper(arr.slice(1));
  };
  helper(arr);
  console.log(list);
  return list;
  // add whatever parameters you deem necessary - good luck!
}

function flattenA(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

// flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
// flatten([[1], [2], [3]]); // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3
