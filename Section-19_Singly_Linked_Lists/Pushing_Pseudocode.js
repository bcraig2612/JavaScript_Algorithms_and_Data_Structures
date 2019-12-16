// This function should accept a value

// Create a new node using the value passed to the function

// If there is no head property on the list, set the head and tail to be the newly created node

// Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node

// Increment the length by one

// Return the linked list

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    // skeleton for push method. allows a value to be pushed to this list
    push(val) {
        // declaring a variable that creates a new Node with a value
        var newNode = new Node(val);
        // if there is no head make the head and tail to be the new node
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // otherwise, take the current tail and set the next property equal to the new node
            this.tail.next = newNode;
            // now we need to update this.tail to point to that new node
            // that sets our new tail
            // we took the current tail, added onto the end of it, and then moved the tail "marker" over
            this.tail = newNode;
        }
        // increment the length
        this.length++;
        // return the whole list
        return list;
    }
  }
  
  var list = new SinglyLinkedList();