// This function accepts an array of numbers and a value
// Loop through the array and check if the current array element is equal to the value
// If it is, return the index at which the element is found
// If the value is never found, return -1
// Don't use indexOf()
// =============================================================
// findIndex() is a JS method that returns -1 automatically if the num      is not found within the array
function linearSearch(arr, val) {
    let i = arr.findIndex( el => el === val);
    return i;
}
linearSearch();
// =============================================================
function linearSearch(arr, val) {
    for(var i=0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}
linearSearch();
// =============================================================