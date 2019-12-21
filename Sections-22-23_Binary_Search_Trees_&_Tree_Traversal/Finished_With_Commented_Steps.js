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
  // FIRST IN FIRST OUT
  BFS() {
    var node = this.root,
      // > *Create a queue (this can be an array) and a variable data to store the values of nodes visited*
      data = [],
      queue = [];
    // > *Place the root node in the queue*
    queue.push(node);
    // > *Loop as long as there is anything in the queue*
    while (queue.length) {
      //   > *Dequeue a node from the queue and push the value of the node into the variable that stores the nodes*
      node = queue.shift();
      data.push(node.value);
      //   > *If there is a left property on the node dequeued - add it to the queue*
      if (node.left) queue.push(node.left);
      //   > *If there is a right property on the node dequeued - add it to the queue*
      if (node.right) queue.push(node.right);
    }
    // > *Return the variable that stores the values*
    return data;
  }
  DFSPreOrder() {
    // > *Create a variable to store the values of nodes visited*
    var data = [];
    // > *Write a helper function which accepts a node*
    function traverse(node) {
      //  > *Push the value of the node to the variable that stores the values*
      data.push(node.value);
      //  > *If the node has a left property, call the helper function with the left property on the node*
      if (node.left) traverse(node.left);
      //  > *If the node has a right property, call the helper function with the right property on the node*
      if (node.right) traverse(node.right);
    }
    // > *Invoke the helper function with the current variable*
    traverse(this.root);
    // > *Return the array of values*
    return data;
  }
  DFSPostOrder() {
    //  > *Create a variable to store the values of nodes visited*
    var data = [];
    //  > *Write a helper function which accepts a node*
    function traverse(node) {
      //  > *If the node has a left property, call the helper function with the left property on the node*
      if (node.left) traverse(node.left);
      //  > *If the node has a right property, call the helper function with the right property on the node*
      if (node.right) traverse(node.right);
      //  > *Push the value of the node to the variable that stores the values*
      data.push(node.value);
    }
    //  > *Invoke the helper function with the current variable*
    traverse(this.root);
    //  > *Return the array of values*
    return data;
  }
  DFSInOrder() {
    //  > *Create a variable to store the values of nodes visited*
    var data = [];
    //  > *Write a helper function which accepts a node*
    function traverse(node) {
      //  > *If the node has a left property, call the helper function with the left property on the node*
      if (node.left) traverse(node.left);
      //  > *Push the value of the node to the variable that stores the values*
      data.push(node.value);
      //  > *If the node has a right property, call the helper function with the right property on the node*
      if (node.right) traverse(node.right);
    }
    //  > *Invoke the helper function with the current variable*
    traverse(this.root);
    //  > *Return the array of values*
    return data;
  }
}
// creates new binary search tree
var tree = new BinarySearchTree();
// insert a bunch of values
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS();
// would return [ 10, 6, 15, 3, 8, 20 ]
tree.DFSPreOrder();
// would return [ 10, 6, 3, 8, 15, 20]
tree.DFSPostOrder();
// would return [ 3, 8, 6, 20, 15, 10 ]
tree.DFSInOrder();
// would return [ 3, 6, 8, 10, 15, 20 ]
