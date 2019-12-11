//Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

//We can use timers for our functions
var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// adds n+1, then multiplies that number by n, and then divides that number by n
function addUpToo(n) {
  return (n * (n + 1)) / 2;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

//What does better mean? It means faster and less memory-intensive.

//The problem with time
// (1) Different machines will record different times
// (2) The same machine will record different times!
// (3) For fast algorithms, speed measurements may not be precise enough.
