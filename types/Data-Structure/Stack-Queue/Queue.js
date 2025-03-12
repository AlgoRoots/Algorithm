class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.size) return;
    if (this.first === this.last) {
      this.last = null;
    }
    let removed = this.first;
    this.first = this.first.next;
    this.size--;
    return removed.value;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

// 맨뒤에 추가하고 앞에서 삭제 해야 상수값을 가짐

/**
 * Queue
 * 무언가 추가할 때 enqueue 무언가 제거할 떄 dequeue
 *
 * 게임 접속 대기
 * 줄서기
 * 업로드 및 다운로드시 파일 크기가 같으면 먼저 한거 처리
 * 인쇄
 *
 */

/**
 * BIG O
 *
 * insertion 0(1)
 * removal o(1)
 * searching o(n)
 * access o(n)
 */

/**
 * 스택과 큐는 추가 제거 모두가 상수값 o(1)을 가짐
 *
 * 큐
 * FIFO 먼저 들어간게 먼저 나온다.
 * 인쇄 대기열
 * 업무 처리시 유요하고 다른 데이터 구조에서 잘 사용 됨.
 */
