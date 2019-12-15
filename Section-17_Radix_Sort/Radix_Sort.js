// Define a function that accepts list of numbers

// Figure out how many digits the largest number has

// Loop from k = 0 up to this largest number of digits

// For each iteration of the loop:
//     - Create buckets for each digit (0 to 9)
//     - place each number in the corresponding bucket based on its kth digit

// Replace our existing array with values in our buckets, starting with 0 and going up to 9

// return list at the end!

function getDigit(num, i) {
  // Math.floor makes sure its not a decimal
  // Math.abs makes sure its not a negative number
  // We divide the num by 10 to the power of whatever i is 
  // Since we use math.floor, whatever the result after dividing is will be a non-decimal num
  // Using the modulus operator [ % ] means we divide and get the remainder which should be equal to the digit we are checking for
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  // We include this if statement so that if it's 0 we don't get infinity, instead we get 1
  if (num === 0) return 1;
  // Math.log10 basically asks 10 to what power gives us whatever num we are currently checking. 
  // Again, we use Math.floor to give us a clean non decimal answer and Math.abs to make sure it isn't a negative number.
  // Then we add 1
  // After these steps the solution should give us the amount of digits in the num that we passed in
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Takes in a list of numbers
function mostDigits(nums) {
  // Create a maxDigits that starts at 0 before we loop through nums
  let maxDigits = 0;
  // Looping through the list of nums 
  for (let i = 0; i < nums.length; i++) {
    // Math.max compares 2 numbers and returns the larger number 
    // We use this to allow maxDigits to store whatever number has the most amount of digits while we check the entire array of numbers.
    // So no matter what place in the array the biggest number is, it allows maxDigits to be updated to whatever the number is and whenever it is listed.
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
// Takes in a list of numbers
function radixSort(nums) {
  // First we declare maxDigitCount to hold whatever the max number of digits is in our list of numbers.
  // We use our mostDigits helper function to do that for us. The result will be stored within maxDigitCount.
  let maxDigitCount = mostDigits(nums);
  // We set an index with k to 0 and this allows us to loop through the number and get each index and its value
  for (let k = 0; k < maxDigitCount; k++) {
    // We create our buckets with digitBuckets
    // Array.from() creates a specific amount of empty arrays
    // If we pass in ( { length:10 } ), () => []); 
        // This will create 10 empty arrays within digitBuckets
    let digitBuckets = Array.from({ length: 10 }, () => []);
    // Now we need to loop over every number in the array
    for (let i = 0; i < nums.length; i++) {
      // We're going to figure out at position k (0-index) of each number in the array what number do we get in that index
      // We create the variable digit to hold the digits being checked through the current round through the loop
      // Then, we use digitBuckets to check what numbers we have currently stored in the variable digit and put it in the specific bucket it goes in.
      // For example, we check the 0-index of 4 different numbers and get 2, 4, 6, and 7. This will store those numbers in the correct bucket for the specific number
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
      // Then we need to recollect all of those numbers that are in there buckets and store them all within an empty array
      // Otherwise they'd just all be in separate buckets not in the order we want them to be 
    }
    // We re-assign num to be an empty array, use the .concat method, and then use the spread operator with digit buckets to allow us to pass in each element individually to our empty array
    // Without the spread operator, it would still concat this into a new array but it would still keep all of the arrays/buckets separate
    nums = [].concat(...digitBuckets);
  }
  // then just return the nums!
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
