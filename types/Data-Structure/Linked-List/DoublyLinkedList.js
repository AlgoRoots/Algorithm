class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.length) return;
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;
    return oldTail;
  }
  shift() {
    if (!this.length) return;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(idx, val) {
    if (idx < 0 || idx >= this.length) return null;
    const center = this.length / 2;
    let current, counter;
    if (idx <= center) {
      current = this.head;
      counter = 0;
      while (counter !== idx) {
        current = current.next;
        counter++;
      }
    } else {
      current = this.tail;
      counter = this.length - 1;
      while (counter !== idx) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }
  set(idx, val) {
    let oldNode = this.get(idx);
    if (!oldNode) return false;
    oldNode.val = val;
    return true;
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length || !val) return false;
    if (this.length === 0) return !!this.unshift(val);
    if (this.length === idx) return !!this.push(val);

    let newNode = new Node(val);
    let beforeNode = this.get(idx - 1);
    let afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }
  remove(idx) {
    if (idx < 0 || idx >= this.length) return;
    if (this.length === 0) return this.shift(val);
    if (this.length - 1 === idx) return this.pop(val);

    let removedNode = this.get(idx);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail; // 5 null
    this.tail = node;

    let next = null;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      node.prev = next;
      prev = node;
      node = next;
    }

    return this;
  }
}
// 1 2 3 4 5
let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

// insertion - O(1)
// removal - o(1)
// searching - o(n)
// access - o(n)

// RECAP
// 데이터 반대방향시 유리
// 검색하는데 더 나은 성능 (단일보다 절반의 시간)
// 추가로 만든 포인터는 메모리를 더 소모
// 일정한 상황에서는 훨씬낫다. 돌아다니는건 낫지만 메모리는 더 소비한다.
