//  string 자료형의 key에 해당하는 공간에 string 자료형의 value를 집어넣은 것
const person = {};
person["firstName"] = "Kelly";
person["lastName"] = "Park";

// 1. Hash Table 생성

class HashTable {
  // table을 100개로 특정 길이를 명시한 것은 나중에 특정 상황에서 길이를 늘리고자 함이다. (해시 충돌에 대응하기 위한 방법 중 하나다.)
  table = new Array(3);
  // 해시 테이블 사이즈에 바로 접근 할 수 있도록 변수 생성, setItem 할 때마다 numItem++되어 table에 들어있는 개수를 그때 그때 반영
  //  이 값을 활용하여, table의 길이 대비 현재 들어있는 값의 개수를 연산해 특정 수준 이상으로 값이 할당이 되면 table의 길이를 늘림
  numItems = 0;

  //// key로 어떤 string이 들어오든, hashStringToInt 함수를 통해 string이 number로 인덱스화해서 table에 값이 저장될 것이다.
  // 지금으로선 어떤 string이 들어오든 해시 함수를 통해 table[3]에 저장될 것이다.
  setItem = (key, value) => {
    this.numItems++;

    // table 원소 개수가 80%이상 차있는 경우 resize()
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor >= 0.8) {
      this.resize();
    }

    // 단순히 key를 변환한 인덱스에 value만 저장하는 게 아니라, key, value 쌍의 배열을 하나씩 push 하는 방식으로 저장을 한다.
    // 만약 해시 충돌이 일어나지 않았다면 그냥 key, value 쌍을 배열에 넣어 주면 되고,
    // 이미 해당 인덱스를 차지하는 값이 존재한다면 기존 배열에 새로운 key, value 쌍을 push 해 준다.
    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };

  // 만약 배열의 크기를 3에서 6으로 두 배를 했다면, 그보다 큰 소수인 7을 새로운 table의 크기로 설정해주는 것이다.
  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashStringToInt(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  };

  // getItem에서도 값을 가져오기 원하는 key를 해시 함수로 변환해서 table[3]의 값을 리턴하도록 한다.
  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length);
    // 값이 없는 경우 null;
    if (!this.table[idx]) return null;

    // 단순히 전체 table의 index로 접근 = O(1) but array.find를 사용하면 O(n)으로 증가함
    return this.table[idx].find((el) => el[0] === key)[1];
  };
}

// 2.  해시 함수(Hash Function)가 필요한 이유

function hashStringToInt(s, tableSize) {
  let hash = 17;
  // return 3; 항상 table[3] index 중복 해시 충돌 발생
  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
  }
  return hash;
}

// 생성자 함수 생성 new HashTable();
const myTable = new HashTable();
myTable.setItem("firstName", "Kelly");
console.log(myTable.table.length); // 3
console.log(myTable.getItem("firstName")); // Kelly

myTable.setItem("lastName", "Park");
console.log(myTable.table.length); // 3
console.log(myTable.getItem("lastName"));

myTable.setItem("age", 29);
console.log(myTable.table.length); // 6
console.log(myTable.getItem("age"));

myTable.setItem("birth", "2000-00-00");
console.log(myTable.table.length); // 6
console.log(myTable.getItem("birth"));

//  firstName이 Kelly로 리턴이 된다. 그런데 위에서 만들어 둔 해시 함수는 항상 5를 리턴하기 때문에 어떤 값을 setItem으로 table에 저장해도
// 같은 인덱스 3에 덮어씌워 저장이 될 것이다.

// 3, 해시 함수 작성하는 법
// 해시 충돌을 방지하기 위해서는 해시 함수가 key의 분포를 최대한 분산하도록 작성해야 한다.
// 아까처럼 숫자 3만 리턴하게 된다면 값을 세팅하고 가져오는 과정에서 인덱스가 중복돼 데이터를 유실하거나 성능이 저하된다.
// 복수의 key가 동일한 메모리 주소 값으로 변환되는 경우를 hash collision, 해시 충돌이라고 한다.

// 3-1 한 가지 방법은 key로 들어오는 문자열을 charCode로 변환한 값을 활용

// 일단 hash라는 변수에 17을 할당을 해 주었다.
// 해시 테이블에서는 주로 테이블의 크기나 각 자릿수에 곱할 값을 소수로 지정하는데,
// 그 이유는 좀 더 효율적인 key 분산을 위해서다. 그리고 for문을 돌면서 각 문자를 charCodeAt으로 변환해 준 값에 hash를 곱한 수를 하나씩 더해준다.
// function hashStringToInt(s) {
//   let hash = 17;

//   for (let i = 0; i < s.length; i++) {
//     hash = hash * s.charCodeAt(i);
//   }
//   return hash;
// }

// 4. 충돌 방지하기
