// the function accepts an array
function collectOddValues(arr) {
  // newArr is going to be an empty array every time the function is called recursively. we want it to work that way.
  let newArr = [];
  // we check if the array input is empty. It's not until there's          nothing left from the array that is passed into collectOddValues
  if (arr.length === 0) {
    return newArr;
  }
  // then we check if the first number in our array is odd.
  // if it's odd, we push that number into newArr
  // if it's even, we skip to where we concat and then slice the num at      0-index
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  // then we assign newArr to equal newArr (which is the current value)
  // then we slice the num at 0-index from the array and run it through    again
  // what we do is concatenate all the arrays at the very end into one     array
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);
