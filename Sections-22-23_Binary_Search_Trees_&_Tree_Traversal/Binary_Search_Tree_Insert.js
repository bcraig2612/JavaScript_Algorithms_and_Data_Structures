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
  // create insert that takes in a value
  insert(value) {
    // the value passed in is stored in a variable called newNode
    var newNode = new Node(value);
    // check to see IF the node has a root or not
    if (this.root === null) {
      // if there's no root, then this node becomes the root
      this.root = newNode;
      // return this newly inserted node
      return this;
    }
    // store our root in a variable called current
    var current = this.root;
    // while true, meaning while the value is greater than or less than the root or current value
    while (true) {
      // if the value is equal to the current value we are checking, return undefined
      if (value === current.value) return undefined;
      // if the value is less than the root
      if (value < current.value) {
        // if the left of the root is null
        if (current.left === null) {
          // then our value creates a new node in that spot.
          current.left = newNode;
          // return the value
          return this;
        }
        // redeclare our current variable as current.left so we can continue looking down the left side branch
        current = current.left;
        // otherwise, if our value is greater than the root
        // we just put else without a condition because we have already explained what to do if the value is equal or less than the root
      } else {
        // if the root has nothing to the right of it
        if (current.right === null) {
          // then we place our value in that spot as a new node
          current.right = newNode;
          // return value
          return this;
        }
        // now redeclare our current variable as current.right so we can continue looking down the right side branch
        current = current.right;
      }
    }
  }
}
// ---- VALID TREE WAS CREATED ----
//       (10)
//   (5)      (13)
//(2)  (7) (11)  (16)

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
