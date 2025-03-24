class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let cur = this.root;

    while (true) {
      if (value === cur.value) return false;
      if (value < cur.value) {
        if (!cur.left) {
          cur.left = newNode;
          return this;
        }
        cur = cur.left;
      } else {
        if (!cur.right) {
          cur.right = newNode;
          return this;
        }
        cur = cur.right;
      }
    }
  }

  contains(value) {
    const findNode = new Node(value);
    if (!this.root) return false;
    let cur = this.root;

    while (true) {
      if (value === cur.value) {
        return true;
      }
      if (value < cur.value) {
        if (!cur.left) return false;
        cur = cur.left;
      } else {
        if (!cur.right) return false;
        cur = cur.right;
      }
    }
  }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

/**
 * 이진검색트리 BST
 * 좋은 순서
 * O(1) > O(log n) > O(n log n) > O(n^2) > O(2^n) > O(n!)

* 노드의 크기가 두배가 되면 단계의 수는 하나만 늘어난다.
 * insertion - O(log n)
 * searching - O(log n)
 */
