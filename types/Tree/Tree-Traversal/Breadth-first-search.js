// BFS
/**
 * 1. Queue를 만든다. (배열로 해도 됨) 선입선출 & 방문할 노드값을 저장할 변수를 만든다 .visited
 * 2. root node를 큐에 넣는다.
 * 3. 큐에 값이 없을때까지 loop
 *    1.shift를 사용해서 큐에서 node를 제거(dequeue)하고, visited 에 push한다.
 *    2.그 node의 left값이 있으면 큐에 넣는다.
 *    3.그 node의 right값이 있으면 큐에 넣는다.
 * 4. visited를 리턴한다.
 *
 *        10
 *    6       15
 * 3    8         20
 *
 * queue: [10]  ->  []   -> [6,15]  -> [15,3,8]  -> [3,8]     -> [3,8,20]   -> [8,20]       -> [20]            -> []
 * visited: []  ->  [10] ->  [10]   -> [10, 6]   -> [10,6,15] -> [10,6,15]  -> [10,6,15,3]  -> [10,6,15,3,8]   -> [10,6,15,3,8,20]
 */

/**
 * BFS vs DFS
 * tree에 따라다르다.
 * 넓게 펼쳐진 트리
 * 시각복잡도는 동일, 공간복잡도에 차이가 있음 (모든 노드를 한 번씩 방문하는 것은 같음)
 * bfs: 넢게 펴진 트리는 bfs는 큐에 공간을 많이 차지한다. 공간복잡도 증가
 * dfs: 가지를 따라 내려가면 됨, 더 적은 공간을 차지한다.
 */
const { BinarySearchTree, Node } = require("../BinarySearchTree");

class BST extends BinarySearchTree {
  bfs() {
    let queue = [];
    let visited = [];
    if (!this.root) return visited;
    queue.push(this.root);

    while (queue.length) {
      let dequeued = queue.shift();
      visited.push(dequeued.value);
      if (dequeued.left) queue.push(dequeued.left);
      if (dequeued.right) queue.push(dequeued.right);
    }
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

console.log(tree.bfs());
