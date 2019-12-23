class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  // Heap Insert:
  insert(element) {
    // Push the value into the values property on the heap
    this.values.push(element);
    this.bubbleUp();
  }
  // Bubble Up:
  bubbleUp() {
    // Create a variable called index which is the length of the values property - 1
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      // Create a variable called parentIndex which is the floor of (index-1)/2
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      // Keep looping as long as the values element at the parentIndex is less than the values element at the child index
      if (element <= parent) break;
      // Swap the value of the values element at the parentIndex with the value of the element property at the child index
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      // Set the index to be the parentIndex, and start over!
      idx = parentIdx;
    }
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  // Original Array:
   // [ 55, 39, 41, 18, 27, 12, 33 ]
  // Where We Currently Are 1st Time Through:
    //   0   1   2   3   4   5
   // [ 33, 39, 41, 18, 27, 12 ]
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if(leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if(leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if(rightChild < length) {
        rightChild = this.values[rightChildIndex];
        if(
            (swap === null && rightChild > element) ||
            (swap !== null && rightChild > leftChild)
          ) {
              swap = rightChildIndex;
        }
      }
      if(swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
