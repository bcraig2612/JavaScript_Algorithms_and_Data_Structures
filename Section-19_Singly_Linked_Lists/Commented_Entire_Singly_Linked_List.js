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
  // skeleton for get method. allows you to get the value/property of a node in the list by its position
  // takes an index
  get(index) {
    // if the index is less than zero or greater than or equal to the length of the list, return null
    if (index < 0 || index >= this.length) return null;
    // loop through the list until you reach the index and return the node at that specific index
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // skeleton for set method. allows you to change the value of a node based on it's position in the linked list
  // accepts two things ( index, value ) value is what you want whatever is in the current index to be updated to
  set(index, val) {
    // create variable to store value and update it to new value
    var foundNode = this.get(index);
    // if the node is not found, return false
    // if the node is found, set the value of that node to be the value passed in and return true;
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  // skeleton for insert method. allows you to add a new node to the list at a specific location/index
  // accepts 2 arguments: index and value being passed in
  insert(index, val) {
    // If the index is less than zero or greater than the length, return false
    if (index < 0 || index > this.length) return false;
    // If the index is the same as the length, push a new node to the end of the list
    // Adding double bang operators will prevent the push method from returning the entire list, and instead return just the word true.
    if (index === this.length) return !!this.push(val);
    // If the index is 0, unshift a new node to the start of the list
    // Adding double bang operators will prevent the unshift method from returning the entire list, and instead return just the word true.
    if (index === 0) return !!this.unshift(val);
    // Otherwise, using the get method, access the node at the index - 1
    // Set the next property on that node to be the new node
    var newNode = new Node(val);
    var previous = this.get(index - 1);
    // Set the next property on the new node to be the previous next
    var temporary = previous.next;
    previous.next = newNode;
    newNode.next = temporary;
    // Increment the length
    this.length++;
    // Return true
    return true;
  }
  // skeleton for remove method. allows you to remove a node from the linked list at a specific location/index
  // takes in an index as a parameter
  remove(index) {
    // If the index is less than zero or greater than the length, return undefined
    if (index < 0 || index >= this.length) return undefined;
    // If the index is 0, shift
    if (index === 0) return this.shift();
    // If the index is the same as the length-1, pop
    if (index === this.length - 1) return this.pop();
    // Otherwise, using the get method, access the node at the index - 1
    var previousNode = this.get(index - 1);
    // Set the next property on that node to be the next of the next node
    var removed = previousNode.next;
    previousNode.next = removed.next;
    // Decrement the length
    this.length--;
    // Return the value of the node removed
    return removed;
  }
  // skeleton for reverse method. allows you to reverse the linked list in place. (no copy)
  reverse() {
    // Create a variable called node and initialize it to the head property
    var node = this.head;
    // Swap the head and tail
    this.head = this.tail;
    this.tail = node;
    // Create a variable called next
    var next;
    // Create a variable called previous
    var previous = null;
    // Loop through the list
    for (var i = 0; i < this.length; i++) {
      // Set next to be the next property on whatever node is
      next = node.next;
      // Set the next property on the node to be whatever prev is
      node.next = previous;
      // Set prev to be the value of the node variable
      previous = node;
      // Set the node variable to be the value of the next variable
      node = next;
    }
    // Once you have finished looping, return the list
    return this;
  }
  // the print method is extra. its not required and is only being used to easily track whether or not the reverse method works correctly or not.
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}
var list = new SinglyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);
