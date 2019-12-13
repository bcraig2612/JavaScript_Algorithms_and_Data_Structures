// Define a function that takes in 2 strings
// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match, continue on
// If you complete the inner loop and find a match, increment the count     of total matches found
// Return the total count

function naiveSearch(long, short) {
  var count = 0;
  // loop through every character of 1st string
  for (var i = 0; i < long.length; i++) {
      // loop through every character of 2nd string
    for (var j = 0; j < short.length; j++) {
        // if index of long + index of short don't match, then break and    move on to the next index spot
        // if the index of long and short do match, we move on and now j    moves onto the next index of short, but i remains on the same    index spot of long
        // so now we add i, which is still 0, and j, which is now 1, and    we get 1.
        // this process continues until a match is created and then adds    it to count, or until it breaks and then starts the process      over again until we reach the length of the long string.
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}
naiveSearch('lorie loled', 'lol');
