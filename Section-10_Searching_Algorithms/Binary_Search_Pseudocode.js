// This function accepts a sorted array and a value
// Create a left pointer at the start of the array, and a right pointer     at the end of an array.
// While the left corner comes before the right pointer:
    // Create a pointer in the middle
    // If you find the value you want, return the index
    // If the value is too small, move the left pointer up
    // If the  value is too large, move the right pointer down
// If you never find the value, return -1

// ****** BINARY SOLUTION ******
  function binarySearch(arr, elem) {
    // start is the left pointer that starts at 0-index
    var start = 0;
    // end is the right pointer that starts at the last index of the arr
    var end = arr.length - 1;
    // add left + right divided by 2 to get the middle pointer
    // you need to include Math.floor() to make sure it's a whole number
    var middle = Math.floor((start + end) / 2);
    // if element is less than array[middle]
    // if array[middle] is not equal to elem
    // & start is less than or equal to end, continue on with the           process
    // without && start <= end the loop will continue forever if the        elem is a value that isn't in the array
    while(arr[middle] !== elem && start <= end) {
        // if elem is less than arr[middle]
        // if that's true, we set the end to the spot that the middle is    currently at and decrease the middle by 1
        if(elem < arr[middle]) end = middle - 1;
        // if the elem is greater than arr[middle]
        // we set the start to the spot that the middle is currently at     and increase the middle by 1.
        else start = middle + 1;
        // repeat line 53
        middle = Math.floor((start + end) / 2);
    }
    // if arr[middle] is equal to the elem, return middle
    // else, return -1
    // we use a ternary operator [ arr[middle] === elem ? middle : -1; ]
    return arr[middle] === elem ? middle : -1;
}
binarySearch([2,5,6,9,13,15,28,30], 103)




// *** Original Solution ***
function binarySearch(arr, val){
    let first = 0;
    let last = arr.length - 1;
    let middle = Math.floor((first + last) / 2);
    while(arr[middle] !== val && first <= last) {
        if(val < arr[middle]) last = middle - 1;
        else first = middle + 1;
        middle = Math.floor((first + last) / 2);
    }
    return arr[middle] === val ? middle : -1;
  }


  

// *** Original Solution ***
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    } 
    return -1;
}



