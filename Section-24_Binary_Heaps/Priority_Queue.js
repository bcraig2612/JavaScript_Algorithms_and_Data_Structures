// ********* PRIORITY QUEUE *********
// Write a Min Binary Heap - lower number means higher priority.
// Each Node has a val and a priority.  Use the priority to build the heap.
// Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
// Dequeue method removes root element, returns it, and rearranges heap using priority.
// ***********************************

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

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
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
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
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
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
let ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);
