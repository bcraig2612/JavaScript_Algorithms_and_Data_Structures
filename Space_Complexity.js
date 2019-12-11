// Space Complexity in JavaScript
// Rules of Thumb:
// >> Most primitives ( booleans, numbers, undefined, null ) are constant space
// >> Strings require O(n) space (where n is the string length)
// >> Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// This function consists of 2 declared numbers. total which is equal to 0, and i which is equal to 0.
// That would cause this function to be considered O(1) space in Space Complexity.

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
// Space is directly related to n, the input
// This would be considered O(n) space in Space Complexity.
