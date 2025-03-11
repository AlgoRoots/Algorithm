class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return;
    let current = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }
  unshift(val) {
    let newNode = new Node(val);
    let currentHead = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(idx) {
    let counter = 0;
    let current = this.head;
    if (idx < 0 || idx >= this.length) return false;
    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(idx, value) {
    let foundNode = this.get(idx);
    if (!foundNode) return false;
    foundNode.val = value;
    return true;
  }
  insert(idx, value) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(value);
    if (idx === this.length) return !!this.push(value);
    let newNode = new Node(value);
    let prev = this.get(idx - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp.next;
    this.length++;
    return true;
  }
  remove(idx, value) {
    if (idx < 0 || idx >= this.length) return;
    if (idx === 0) return this.shift(idx, value);
    if (idx === this.length - 1) return this.pop(idx, value);
    let prev = this.get(idx - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    let node = this.head; // (1,(2,(3,4))) > (1, null) . (2,(3,4)) > (2,(1,null)) .(3,4) > 4
    this.head = this.tail; //(4,null)      >
    this.tail = node; //   (1,(2,(3,4))) >
    // (4,null) 2, 3, (1,2)
    //
    let next; //                    > (2,(3,4)) >             (3,4)              > 4
    let prev = null; //null > (1,null)  >             (2,(1,null))       >(3,4)
    for (let i = 0; i < this.length; i++) {
      console.log("@head", this.head);
      console.log("@tail", this.tail);
      console.log({ node, prev, next });
      // console.log('@head',this.head,'@next',this.tail)
      next = node.next; //다음 노드 저장
      node.next = prev; // 방향 반전
      prev = node; //
      node = next;
    }
    return this;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

// let first = new Node('Hi')
// first.next = new Node('therer')
// first.next.next = new Node('how')
// first.next.next.next = new Node('are')
// first.next.next.next.next = new Node('you')

let list = new SinglyLinkedList();
list.push("1!");
list.push("2");
list.push("3");
list.push("4");

// BigO
// insertion - O(1) 데이터 삽입은 array보다는 단반향 연결리스트가 유리. array 는 삽입시 모든 idx n번 옮겨야하기 때문에 o(n))
// Removal - It depends.. o(1) or o(n)
// Searching  - o(n)
// Access - o(n) array는 idx에 바로 접근하면 되기 때문에 이경우에는 array유리

// 삽입,삭제가 중요하고 임의 접근 필요성 없을 경우 > 단방향 연결리스트

// RECAP
// 삽입 작업과 리스트 맨 앞 노드의 제거 작업이 빈번하게 사용될 경우
// array는 내장된 idx를 가지고 있는 반면, 단방향 연결 리스트는 그렇지 않음
// 단방향 연결 리스트는 단지 다음 노드로 연결되는 참조 혹은 포인터를 갖는 노드들의 집합체
// 인덱스 혹은 위치정보가 없어 쉽게 노드 정보에 접근할 수 없음
// 스택 , 큐 자료구조 구현을 위해 단방향 연결 리스트에 대한 이해가 있어야함
