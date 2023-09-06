const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}
//minheap
class Priority {
  constructor() {
    this.queue = [];
  }
  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.insert(newNode);
  }
  insert(newNode) {
    this.queue.push(newNode);
    let idx = this.queue.length - 1;
    const element = this.queue[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.queue[parentIdx];
      if (element.priority >= parent.priority) break;
      this.queue[parentIdx] = element;
      this.queue[idx] = parent;
      idx = parentIdx;
    }
    return this.queue;
  }
  dequeue() {
    //check steve solution too
    swap(this.queue, 0, this.queue.length - 1);
    let min = this.queue.pop();
    let parentIdx = 0;
    while (2 * parentIdx + 2 <= this.queue.length - 1) {
      let leftChild = 2 * parentIdx + 1;
      let rightChild = 2 * parentIdx + 2;
      if (this.queue[leftChild].priority > this.queue[rightChild].priority) {
        swap(this.queue, parentIdx, rightChild);
        parentIdx = rightChild;
      } else {
        swap(this.queue, parentIdx, leftChild);
        parentIdx = leftChild;
      }
    }
    return min;
  }
}
//[ 18, 39, 27, 41, 33 ]
const heap = new Priority();
heap.enqueue(41, 6);
heap.enqueue(39, 2);
heap.enqueue(33, 3);
heap.enqueue(18, 4);
heap.enqueue(27, 5);
heap.enqueue(12, 1);
console.log(heap.queue);

console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
