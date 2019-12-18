// NODE
// - value
// - next
// - previous
// DOUBLY LINKED LIST
// - head
// - tail
// - length

class Node {
  constructor(value) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Create a new node with the value passed to the function
  push(value) {
    var newNode = new Node(value);
    // If the head property is null set the head and tail to be the newly created node
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      // If not, set the next property on the tail to be that node
    } else {
      this.tail.next = newNode;
      // Set the previous property on the newly created node to be the tail
      newNode.previous = this.tail;
      // Set the tail to be the newly created node
      this.tail = newNode;
    }
    // Increment the length
    this.length++;
    // Return the Doubly Linked List
    return this;
  }
}
