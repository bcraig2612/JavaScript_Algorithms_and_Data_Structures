***BINARY HEAPS***
    **OBJECTIVES**
    - *Define what a Binary Heap is*
    - *Compare and contrast min and max heaps*
    - *Implement basic methods on heaps*
    - *Understand where heaps are used in the real world and what other data structures can be constructed from heaps*
    **WHAT IS A BINARY HEAP?**
    - *Very similar to a binary search tree, but with some different rules!*
    - *In a MaxBinaryHeap, parent nodes are always larger than child nodes.* 
    - *In a MinBinaryHeap, parent nodes are always smaller than child nodes.*
    **MAX BINARY HEAP**
    - *Each parents has at most 2 nodes*
    - *The value of each parent node is always greater than its child nodes*
    - *In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.*
    - *A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first*
    **WHY DO WE NEED TO KNOW THIS?**
    - *Binary Heaps are used to implement Priority Queues, which are very commonly used data structures*
    - *They are also used quite a bit, with graph traversal algorithms*
    **WHAT IS A PRIORITY QUEUE?**
    - *A data structure where each element has a priority.*
    - *Elements with higher priorities are served before elements with lower priorities.*
    **RECAP:**
    - *Binary Heaps are very useful data structures for sorting, and implementing other data structures like priority queues*
    - *Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being smaller or larger than their children*
    - *With just a little bit of math, we can represent heaps using arrays!*