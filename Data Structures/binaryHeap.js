const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

class BinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    // this.values.push(val);
    // let idx = this.values.length - 1; //8
    // let parentIdx = Math.floor((idx - 1) / 2); //3
    // while (this.values[parentIdx] < val) {
    //   console.log(parentIdx, this.values[parentIdx], val);
    //   swap(this.values, this.values.indexOf(val), parentIdx);
    //   console.log(this.values);
    //   parentIdx = Math.floor((parentIdx - 1) / 2);
    // }
    // return this.values;

    this.values.push(val);
    let idx = this.values.length - 1; // 7
    const element = this.values[idx]; // 55
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2); // 3
      let parent = this.values[parentIdx]; // 35
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
    return this.values;
  }
  removeMax() {
    //check steve solution too
    swap(this.values, 0, this.values.length - 1);
    let max = this.values.pop();
    let parentIdx = 0;
    while (2 * parentIdx + 2 < this.values.length - 1) {
      let leftChild = 2 * parentIdx + 1;
      let rightChild = 2 * parentIdx + 2;
      if (this.values[leftChild] > this.values[rightChild]) {
        swap(this.values, parentIdx, leftChild);
        parentIdx = leftChild;
      } else {
        swap(this.values, parentIdx, rightChild);
        parentIdx = rightChild;
      }
    }
    return max;
  }
}

//         50          15
//     45     40
//   35  30 25  20
// 15
const heap = new BinaryHeap();
// heap.insert(10);
// heap.insert(5);
// heap.insert(13);
// heap.insert(11);
// heap.insert(2);
// heap.insert(16);

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
console.log(heap.insert(55));
console.log(heap.removeMax());
