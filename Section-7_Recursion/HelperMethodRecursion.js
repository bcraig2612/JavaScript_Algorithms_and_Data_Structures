function collectOddValues(arr) {
  let result = [];


// ============== THIS IS THE HELPER METHOD ============
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
// Line 11 is checking to see if the 0-index isn't divisible by 2 cleanly.
    if (helperInput[0] % 2 !== 0) {
// If it is odd, we push the 0-index to the empty result array.
      result.push(helperInput[0]);
    }
// Then, we slice the current 0-index in order to continue checking each
    helper(helperInput.slice(1));
  }
// ============== THIS IS THE HELPER METHOD ============


  helper(arr);
  return result;
}
collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
