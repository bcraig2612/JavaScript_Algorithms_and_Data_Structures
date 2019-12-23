// ********* REMOVING OR extractMax ********
// Swap the first value in the values property with the last one
// Pop from the values property, so you can return the value at the end.
// Have the new root "sink down" to the correct spot...​
// Your parent index starts at 0 (the root)
// Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
// Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
// If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
// The child index you swapped to now becomes the new parent index.
// Keep looping and swapping until neither child is larger than the element.
// Return the old root!
// *****************************************

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
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      // Create a variable called parentIndex which is the floor of (index-1)/2
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      // Keep looping as long as the values element at the parentIndex is less than the values element at the child index
      if (element <= parent) break;
      // Swap the value of the values element at the parentIndex with the value of the element property at the child index
      this.values[parentIndex] = element;
      this.values[index] = parent;
      // Set the index to be the parentIndex, and start over!
      index = parentIndex;
    }
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChild < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
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
