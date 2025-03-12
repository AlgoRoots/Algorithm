class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }
  pop() {
    if (!this.size) return;
    let removed = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    ㅅ;
    this.size--;
    return removed.value;

    // 내가 한 방식 아래
    // if(this.size === 1) {
    //     this.first = null;
    //     this.last = null;
    // } else {
    //     this.first = this.first.next;
    // }
    // this.size--;
    // removed.next= null;
    return removed;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

// 순서대로 넣고 맨 뒤에걸 뺴는 방식이 아닌, > 상수 값의 시간을 가지지 않음 (last까지 찾아야함)
// stack은 앞에서 추가 제거 방식 > 상수 값의 시간을 가짐

// BIG O
// *insertion : o(1)
// *removal : o(1)
// searching: o(n)
// access : o(n)

// 탐색 검색이 우선시 되면 다른 배열이나 다른 자료구조 사용
// 스택은 삽입과 제거를 가장 우선시함. 맨앞에서 추가하고 제거하기 때문에 상수값을 가짐

// 스택
// 후입 선출, 실행취소, 다시실행 같은 기록, 접속기록 추적
// js 내장된 데이터 구조는 아님
// 복잡한 알고리즘에서는 그냥 배열 사용해서 스택 구현 (push, pop..)
// push,pop, shift, unshift만 사용한다? > 배열말고 스택 구현하기
