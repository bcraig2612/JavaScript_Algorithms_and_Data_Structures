//What does better mean? It means faster and less memory-intensive.

//The problem with time
// (1) Different machines will record different times
// (2) The same machine will record different times!
// (3) For fast algorithms, speed measurements may not be precise enough.

// If not time, then what?
// Rather than counting seconds, which are so viable..
// Let's count the number of operations the computer has to perform.

// **The Big O Notation**
// It's a way tp formalize fuzzy counting
// It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow
// We won't care about the details, only the trends

// Big O Definition: "We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases."
// (1) f(n) could be linear (f(n) = n)
// (2) f(n) could be quadratic (f(n) = n*n)
// (3) f(n) could be constant (f(n) = 1)
// (4) f(n) could be something entirely different!

// Example:
// Our function addUpTo would be ---> O(n)
// Our function addUpToo would be ---> O(1)
// Our function countUpAndDown would be ---> O(n)
// Our function printAllHours would be ---> O(n*n)
