/**
 * 힙(Heap)이란?
 * 항상 "가장 우선순위가 높은 값"을 빠르게 꺼내기 위한 자료구조
 *
 * Binary Heap
 * 부모가 두 자식을 가지고 있다.
 * max heap 부모는 자식보다 항상 크다
 * min heap 부모는 자식보다 항상 작다
 * 형제끼리는 성립되지 않는다.
 *
 * For any idx of arr
 * the left child is stored at 2n+1
 * the right child is at 2n+2
 *
 * Insertion O(log n)
 * Removal O(log n)
 * Search O(n)
 */

class MaxBinaryHeap {
  constructor() {
    this.values = [55, 39, 41, 18, 27, 12, 33];
  }

  insert(el) {
    this.values.push(el);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      // trickle down
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();

// heap.insert(1);
// heap.insert(45);
// heap.insert(199);
console.log(heap);
heap.extractMax();
console.log("extract max!", heap);

heap.extractMax();
console.log("extract max!", heap);

heap.extractMax();
console.log("extract max!", heap);

heap.extractMax();
console.log("extract max!", heap);

heap.extractMax();
console.log("extract max!", heap);

heap.extractMax();
console.log("extract max!", heap);

heap.extractMax();
console.log("extract max!", heap);

heap.extractMax();
console.log("extract max!", heap);

// heap.extractMax();
// heap.extractMax();

// [41,39,33,18,27, 12, 33]
//   0  1  2  3  4  5  6
