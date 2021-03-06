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
    // If there is no head, return undefined
    pop() {
      if (!this.head) return undefined;
      // Store the current tail in a variable to return later
      var poppedNode = this.tail;
      // If the length is 1, set the head and tail to be null
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        // Update the tail to be the previous Node.
      } else {
        this.tail = poppedNode.previous;
        // Set the newTail's next to null
        this.tail.next = null;
        // Completely sever the connection of the poppedNode by setting the previous to null
        poppedNode.previous = null;
      }
      // Decrement the length
      this.length--;
      // Return the value removed
      return poppedNode;
    }
    // If length is 0, return undefined
    shift() {
      if (this.length === 0) return undefined;
      // Store the current head property in a variable (we'll call it old head)
      var oldHead = this.head;
      // If the length is 1, set the head and tail to be null
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        // Update the head to be the next of the old head
        this.head = oldHead.next;
        // Set the head's prev property to null
        this.head.previous = null;
        // Set the old head's next to null
        oldHead.next = null;
        // Decrement the length
      }
      this.length--;
      // Return old head
      return oldHead;
    }
    // Create a new node with the value passed to the function
    unshift(value) {
      var newNode = new Node(value);
      // If the length is 0
      if (this.length === 0) {
        // Set the head to be the new node
        this.head = newNode;
        // Set the tail to be the new node
        this.tail = newNode;
        // Otherwise
      } else {
        // Set the prev property on the head of the list to be the new node
        this.head.previous = newNode;
        // Set the next property on the new node to be the head property
        newNode.next = this.head;
        // Update the head to be the new node
        this.head = newNode;
      }
      // Increment the length
      this.length++;
      // Return the list
      return this;
    }
    get(index) {
        // If the index is less than 0 or greater or equal to the length, return null
        if(index < 0 || index >= this.length) return null;
        var count, current;
        // If the index is less than or equal to half the length of the list
        if(index <= this.length/2) {
            count = 0;
            current = this.head;
            // Loop through the list starting from the head and loop towards the middle
            while(count !== index) {
                current = current.next;
                count++;
                }
              // If the index is greater than half the length of the list
            } else {
                count = this.length - 1;
                current = this.tail;
                ​// Loop through the list starting from the tail and loop towards the middle
                while(count !== index) {
                    current = current.previous;
                    count--;
                }
            }
            // Return the node once it is found
            return current;
        }
    }
