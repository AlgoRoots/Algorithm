class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * TREE RECAP
 * tree는 비선형구조, 노드들로 구성, 루트하나와 많은 자식노드
 * 이진 트리는 아무 종류의 값을 가질 수 있지만, 각 노드는 최대 두 개의 자식을 가질 수 console.error('있다',있다)
 * 이진 탐색트리는 정렬된 트리이다. 부모의 왼쪽은 부모보다 작고, 오른쪽은 크다.
 * - 비교가 가능한 데이터 종류에만 사용할 수 있다.
 * 트리를 탐색하거나 순회하는 방법 :BFS, DFS (정위 후위 전위)
 */

/**
 * BFS vs DFS
 * tree에 따라다르다.
 * 넓게 펼쳐진 트리
 * 시각복잡도는 동일, 공간복잡도에 차이가 있음 (모든 노드를 한 번씩 방문하는 것은 같음)
 *
 * bfs: 넢게 펴진 트리는 bfs는 큐에 공간을 많이 차지한다. 공간복잡도 증가
 * - 최단 경로 찾기 (ex: 미로, 그래프, 소셜 네트워크에서 친구 관계 거리 구하기)
 * - 레벨별로 트리 노드 나눠 출력
 *
 * dfs: 가지를 따라 내려가면 됨, 더 적은 공간을 차지한다.
 * - 경로 존재 여부, 모든 경우 탐색 ("모든 경로 찾기", "모든 경우의 수", 게임 맵에서 아이템이 있는 모든 위치 탐색)
 * - 어떤 노드가 존재하는지 확인
 * - 특정 값이 있는지 여부
 *
 * dfs: 전위, 후위, 정위 어떤기준으로 사용할까?
 * 전위: 루트 먼저 처리 → 구조 저장, 복사, 루트 우선 로직
 * 중위 : BST 정렬 출력에 최적화
 * 후위: 하위 노드 먼저 → 삭제, 계산, 정리 작업에 유리 (하위 작업이 선행되어야 하는 트리 기반 계산기, 메모리 해제, 의존성 정리 등)
 */
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
 * 0~2개의 가지만 가진다.
 * 부모 노드보다 큰 값은 오른쪽, 작은 값은 왼쪽
 * 
 * 좋은 순서
 * O(1) > O(log n) > O(n log n) > O(n^2) > O(2^n) > O(n!)

 * 노드의 크기가 두배가 되면 단계의 수는 하나만 늘어난다.
 * insertion - O(log n)
 * searching - O(log n)
 * 
 * 보장되지는 않는 경우
 * - 트리가 한 줄로만 늘어져 연결리스트처럼 될 경우
 */
module.exports = { Node, BinarySearchTree };
