// DFS
/**
 * 전위순회 (pre order)
 * root부터 시작해서 왼쪽 > 오른쪽 순으로 순회
 * 1. 상동
 * 2. 상동
 * 3. preOrder 헬퍼함수를 만든다 (노드 값을 변수에 넣어 저장하는 역할)
 *    1. node를 방문해서 배열에 값을 추가해준다.log
 *    2. 그 node의 left값이 있으면 preOrder 함수를 재귀 호출한다.
 *    3. 그 node의 right값이 있으면 preOrder 함수를 재귀 호출한다.
 * 4. visited를 리턴한다. [ 10, 6, 3, 8, 15, 20 ]
 *
 *        10
 *    6       15
 * 3    8         20
 *
 * 후위순회 (post order)
 * 순회를 먼저 하고 방문을 나중에 (root각 가장 나중에 방문한다.)
 * root부터 시작해서 왼쪽 끝까지, 오른쪽 끝까지 순회 후 아래부터 방문
 * [3, 8, 6, 20, 15, 10]
 * 1. 상동
 * 2. 상동
 * 3. preOrder 헬퍼함수를 만든다 (노드 값을 변수에 넣어 저장하는 역할)
 *    1. 그 node의 left값이 있으면 preOrder 함수를 재귀 호출한다.
 *    2. node를 방문해서 배열에 값을 추가해준다.
 *    3. 그 node의 right값이 있으면 preOrder 함수를 재귀 호출한다.
 * 4. visited를 리턴한다. [ 10, 6, 3, 8, 15, 20 ]
 *
 * 정위탐색 (in order) [3,6,8,10,15,20]
 */

const { BinarySearchTree, Node } = require("../BinarySearchTree");

class BST extends BinarySearchTree {
  // 전위순회
  dfsPreOrder() {
    let visited = [];
    if (!this.root) return visited;

    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return visited;
  }

  dfsPostOrder() {
    let visited = [];
    if (!this.root) return visited;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }

    traverse(this.root);

    return visited;
  }
  dfsInOrder() {
    let visited = [];
    if (!this.root) return visited;

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return visited;
  }
}

let tree = new BST();
tree.root = new Node(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.dfsPreOrder()); // [ 10, 6, 3, 8, 15, 20 ]
console.log(tree.dfsPostOrder()); // [ 3, 8, 6, 20, 15, 10 ]
console.log(tree.dfsInOrder()); // [ 3, 6, 8, 10, 15, 20 ]
