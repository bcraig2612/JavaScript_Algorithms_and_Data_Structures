// adds n+1, then multiplies that number by n, and then divides that number by n
function addUpToo(n) {
  return (n * (n + 1)) / 2;
}

var t1 = performance.now();
addUpToo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
// There are 3 operation within this function.
