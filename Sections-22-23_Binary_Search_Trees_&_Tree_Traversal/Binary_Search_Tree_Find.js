class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  // creat find that takes in a value
  find(value) {
    // if we can't find the value we are looking for, return false
    if (this.root === null) return false;
    // create variable current to store the root
    var current = this.root,
    // set found as false because we haven't found what value we are looking for yet
      found = false;
      // while we haven't found the value and while we have a current/root
    while (current && !found) {
      // if the value is less than the parent/root
      if (value < current.value) {
        // we go left in this case and set current as current.left 
        current = current.left;
        // if the value is greater than the parent/root
      } else if (value > current.value) {
        // we go right in this case and set current as current.right
        current = current.right;
        // else we found the value and we set found to true
      } else {
        found = true;
      }
    }
    // if we never find the we return undefined
    if (!found) return undefined;
    // return the current value we were searching for
    return current;
  }
  // this is the same as above but instead of returning the value we were searching for we return either true or false
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
