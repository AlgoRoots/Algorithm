class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }

  push(data) {
    // 새로운 데이터를 받은 노드생성,
    const newNode = new Node(data);
    // 현재 최상위 노트(현재의 this.top노드) 기 새로 노드의 next가됨
    newNode.next = this.top;
    // 그리고 최상위 노드는 새로 들어온 newNode가 된다.
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) return;
    // 최상단 노드가 pop()되면서 최상단 밑에있던 노드가 최상단 노드(this.top)가 된다.
    this.top = this.top.next;
  }

  peek() {
    if (this.isEmpty()) return -404;
    return this.top.data;
  }

  display() {
    if (this.isEmpty()) return;
    let curr = this.top;
    process.stdout.write("(TOP) ");
    while (curr.next) {
      process.stdout.write(`${curr.data} ---> `);
      curr = curr.next;
    }
    process.stdout.write(`${curr.data}\n`);
  }
}

(function () {
  const stack = new Stack();

  stack.push(5);
  stack.push(10);
  stack.push(15);
  stack.push(20);
  stack.push(25);

  stack.display();

  stack.pop();
  stack.pop();

  stack.display();

  console.log(`${stack.peek()} is the top element of the stack. `);
})();
