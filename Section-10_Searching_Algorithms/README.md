**OBJECTIVES**
- *Describe what a searching algorithm is.*
- *Implement linear search on arrays.*
- *Implement binary search on sorted arrays.*
- *Implement a naive string searching algorithm.*
- *Implement the KMP string searching algorithm.*


**HOW DO WE SEARCH?**
- *Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want.*


**JAVASCRIPT HAS SEARCH!**
- *There are many different search methods on arrays in JavaScript:*
    - (1) indexOf
    - (2) includes
    - (3) find 
    - (4) findIndex
  - But how do these functions work?

***LINEAR SEARCH***
- *One at a time, searching from beginning and checking each value in each index*
***BIG O of LINEAR SEARCH***
- *Time Complexity: O(n)* //because it depends on the length of the array
- *Best case is O(1)* //only when the first index is the element we want

// ======================================================================

***BINARY SEARCH***
- *A much faster form of search*
- *Rather than checking one element at a time, you can eliminate HALF of the remaining elements at a time.*
- *Binary search only works on SORTED arrays!*
- *Uses Divide & Conquer*
***BIG O of BINARY SEARCH***
- *Time Complexity: O(log n)* // every time we double the array, it takes one extra step to get to the result
- *Best case is O(1)* //only when the first attempt is the element we want

// ======================================================================

***NAIVE STRING SEARCH***
- *Suppose you want to count the number of times a smaller string appears in a larger string*
- *A straightforward approach involves checking pairs of characters individually*

