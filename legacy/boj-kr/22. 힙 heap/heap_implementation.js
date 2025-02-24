// max heap 구현

class Heap {
  constructor() {
    this.data = [];
  }

  // getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  // getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  // // 강의에서는 파이썬으로 구현할 때 계산 편의를 위해 index 1번부터 사용하게 했는데 이건 0번쨰를 1번이라고 사용했다.
  // getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  // 기본 셋팅
  getParentIndex(i) {
    return Math.floor(i - 1 / 2);
  }

  getLeftChildIndex(i) {
    return i * 2 + 1;
  }

  getRightChildIndex(i) {
    return i * 2 + 2;
  }

  swap(i1, i2) {
    const temp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = temp;
  }

  // push 배열 끝에 넣기
  push(key) {
    this.data[this.data.length] = key;
    // 가장 큰 값일 수 있다. heap요구사항에 따라 자리를 바꿔줘야함 > hepifyUp()통해서 이뤄진다.
    this.heapifyUp();
  }

  // 인자 필요없다 항상 배열의 마지막 요소를 다루기 때문
  heapifyUp() {
    let currentIndex = this.data.length - 1;

    // current요소가 상위요소보다 클 때까지 돌린다.
    // 현재 요소 (가장마지막, 밑에있던 요소) 와 부모 요소의 값을 비교 한다. 현재요소가 크면 위로 올려야하기 때문에 swap()을 쓴다.
    while (
      this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));

      // currentIndex를 비교했던 부보요소로 재할당시킨다.
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  // Push 뿐만아니라 poll도 할 줄 알아야 함(추출)

  poll() {
    // 가장 최상단 요소가 최댓값일 테고
    const maxValue = this.data[0];

    // 그 최상단 요소와 가장 아래에있는 요소로 대체한다. (제거해도되는데 여기서는 대체함)
    this.data[0] = this.data[this.data.length - 1];
    // 배열의 길이를 줄여 맨위에 할당했던 마지막 요소를 없애준다.
    this.data.length--;

    // 여전히 heap의 규칙인지 확인해야한다.
    // 이때 위에서부터 제일 아래로 실행되는 heapifyDown함수 실행
    // 위에서 끝에있던 요소를 첫번째로 대체했었기 때문에
    this.heapifyDown();

    return maxValue;
  }

  heapifyDown() {
    // index 0 최상위 요소
    let currentIndex = 0;

    // 현재 요소를 맨위에 놓고 자식이 더 크면 현재와 자식을 바꿔주는 while문 반복

    // 왼쪽 요소가 있는지 확인
    while (this.data[this.getLeftChildIndex(currentIndex)] !== undefined) {
      let biggestChildIndex = this.getLeftChildIndex(currentIndex);

      if (
        this.data[this.getRightChildIndex(currentIndex)] !== undefined &&
        this.data[this.getRightChildIndex(currentIndex)] >
          this.data[this.getLeftChildIndex(currentIndex)]
      ) {
        biggestChildIndex = this.getRightChildIndex(currentIndex);
      }

      if (this.data[currentIndex] < this.data[biggestChildIndex]) {
        this.swap(currentIndex, biggestChildIndex);
        currentIndex = biggestChildIndex;
      } else {
        return;
      }
    }
  }
}

const heap = new Heap();
console.log(heap);
heap.push(25);
heap.push(5);
heap.push(40);
heap.push(70);
heap.push(90);
heap.push(44);

console.log(heap.data.join(","));

let a = [];
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());

console.log("Top 5 items", a);

console.log(heap.data.join(","));
