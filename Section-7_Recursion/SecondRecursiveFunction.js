function sumRange( num ) {
    // checks to see if num is equal to 1.
    // if true, returns 1
    // if false, skips that and moves onto next line
    if( num === 1 ) return 1;
    return num + sumRange( num-1 );
}

//Example:
sumRange(3)
    // return 3 + sumRange(2)
                    // return 2 + sumRange(1)
                                        // return 1

// ** At this point, we've reached the base case. The num is 1.
// ** Now we work back up because we had data waiting on num to equal 1.
// ** return 1 takes the place of sumRange(1) / return 2 + 1 = 3
// ** return 3 takes the place of sumRange(2) / return 3 + 3 = 6
// ** return 6 is the final num after all of the recursion is finished.
// ** sumRange(3) ---> 6