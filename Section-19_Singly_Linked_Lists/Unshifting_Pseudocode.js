// This function should accept a value

// Create a new node using the value passed to the function

// If there is no head property on the list, set the head and tail to be the newly created node

// Otherwise set the newly created node's next property to be the current head property on the list

// Set the head property on the list to be that newly created node

// Increment the length of the list by 1

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
  // skeleton for push method. allows a new node to be pushed to this list
  push(val) {
    // declaring a variable that creates a new Node with a value
    var newNode = new Node(val);
    // if there is no head make the head and tail to be the new node
    if (!this.head) {
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
    return this;
  }
  // skeleton for pop method. allows a new node to be taken off from the tail of this list
  pop() {
    // check to see if we actually have a node
    if (!this.head) return undefined;
    // when we loop we have 2 variables
    // current, which will be the scout variable the finds the end/tail
    // newTail, the variable that will become the new tail/end
    var current = this.head;
    var newTail = current;
    // now we loop
    // while there is something (current) is there a next
    // if so, continue, if not, then we break
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    // move the tail so that it's not pointing to the new tail
    this.tail = newTail;
    // end the connection by stating that when we reach the position after the newTail(current) it is null and stops the connection
    // which would cause the value to pop off of the linked list
    this.tail.next = null;
    // decrease the length by 1 now that we cut off the last value
    this.length--;
    // if the list is empty now, return null, if not, return current
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // skeleton for shift method. allows a new node to be taken off from the head of this list
  shift() {
    // check to see if we actually have a node
    if (!this.head) return undefined;
    // now we store the current head property in a variable
    var oldHead = this.head;
    // now we want to move the head property over to be the next property to the right of the head
    this.head = oldHead.next;
    // decrement the length by 1 to detach old head from the list
    this.length--;
    // if we continue to shift until it's empty, the head will read as null but the tail will be 0, we can make it null as well
    if (this.length === 0) {
      this.tail = null;
    }
    // return the old head
    return oldHead;
  }
  // skeleton for unshift method. allows a new node to be added to the head of this list
  // takes in a value which is what you're adding
  unshift(val) {
    // create a variable that will accept the new node with the value passed in
    var newNode = new Node(val);
    // check to see if there's a head, if not, the head and tail should equal the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // otherwise set the newly created node's next property to be the current head property on the list
      newNode.next = this.head;
      this.head = newNode;
    }
    // increment the length of the list by 1
    // return the whole list
    this.length++;
    return this;
  }
}

var list = new SinglyLinkedList();
