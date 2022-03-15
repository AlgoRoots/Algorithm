export default class Stack {
  constructor() {
    this.top = null;
  }
  makeNode(value) {
    return {
      value,
      below: null,
    };
  }

  push(...items) {
    for (let item of items) {
      const node = this.makeNode(value);
      if (this.top === null) {
        // 만약 items가 비어있으면 node생성해주고 top이라 한다.
        this.top = node;
      } else {
        // 그렇지 않으면 node아래쪽을 this top, this.top 은 node라고 한다.
        node.below = this.top;
        this.top = node;
      }
    }
  }

  pop() {
    if (this.size() === 0) return;
    let popped;
    if (this.top && this.top.below) {
      popped = this.top;
      this.top = this.top.below;
    } else {
      popped = this.top;
      this.top = null;
    }
    return pooped.value;
  }

  containes(items) {
    let clone = this.top;
    while (clone !== null) {
      if (clone.value === items) {
        return true;
      }
      clone = clone.below;
    }
    return false;
  }

  size() {
    let count = 0;
    let clone = this.top;
    while (clone !== null) {
      count += 1;
      clone = clone.below;
    }
    return count;
  }
}
