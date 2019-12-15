***RADIX SORT***
- *Radix sort is a special sorting algorithm that works on lists of numbers*
- *It never makes comparisons between elements!*
- *It exploits the fact that information about the size of a number is encoded in the number of digits.*
- *More digits means a bigger number!*

**RADIX SORT HELPERS**
- *In order to implement radix sort, it's helpful to build a few helper functions first:*
- *getDigit(num, place) - returns the digit in num at the given place value*
*getDigit(12345, 0); // 5*
*getDigit(12345, 1); // 4*
*getDigit(12345, 2); // 3*
*getDigit(12345, 3); // 2*
*getDigit(12345, 4); // 1*
*getDigit(12345, 5); // 0*

*function getDigit(num, i) {*
  *return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;*
*}*

- *digitCount(num) - returns the number of digits in num*
*digitCount(1); // 1*
*digitCount(25); // 2*
*digitCount(314); // 3*

- *mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list*

*function mostDigits(nums) {*
  *let maxDigits = 0;*
  *for (let i = 0; i < nums.length; i++) {*
    *maxDigits = Math.max(maxDigits, digitCount(nums[i]));*
  *}*
  *return maxDigits;*
*}*