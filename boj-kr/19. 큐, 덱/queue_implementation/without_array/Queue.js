class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return this.front == null && this.rear === null;
  }
  insert(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) this.front = newNode;
    else this.rear.next = newNode;
    // after doing all that we are going to shift the new node rear pointer to the new node

    this.rear = newNode;
  }

  remove() {
    if (this.isEmpty()) return;
    this.front = this.front.next;
    // this.front == null
    // previously in the queue there was only one element and that was deleted
    // so this.rear have to be shifted to newNode;
    if (!this.front) this.rear = null;
  }

  peekFront() {
    if (this.isEmpty()) return -404;
    return this.front.data;
  }

  display() {
    if (this.isEmpty()) return;
    let curr = this.front;
    process.stdout.write("(FRONT) ");
    // when the curr hits the rear pointer is going to stop.
    // it will make curr to stop at the last node.
    while (curr != this.rear) {
      process.stdout.write(`${curr.data} ---> `);
      curr = curr.next;
    }
    process.stdout.write(`${this.rear.data} (REAR)\n`);
  }
}

const queue = new Queue();

queue.insert(5);
queue.insert(10);
queue.insert(15);
queue.insert(20);
queue.insert(25);

queue.display();

queue.remove();
queue.display();

queue.insert(30);
queue.display();

console.log(`${queue.peekFront()} is the top element of the peekFront. `);
