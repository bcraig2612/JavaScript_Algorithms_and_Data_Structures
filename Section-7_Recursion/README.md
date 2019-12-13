***RECURSION***
- *A process ( a function in our case ) that calls itself.*
- *2 essential parts of a recursive function:* 
- *(1) BASE CASE*
- *(2) Different Input/Data*


***Examples of things that use recursion:***
- *JSON.parse / JSON.stringify*
- *document.getElementById and DOM traversal algorithms*
- *Object Traversal*
- *We will see it with more complex data structures*
- *It's sometimes a cleaner alternative to iteration*


***CALL-STACK***
- *When a function is invoked, it is placed( PUSHED ) on top of the call-stack.*
- *When JavaScript sees the RETURN keyword or when the function ends, the compiler will remove ( POP )*
- *When we write recursive functions, we keep pushing new functions onto the call-stack.*


***How Recursive Functions Work:***
- *Invoke the same function with a different input until you reach your base case.*
- *BASE CASE: The condition when the recursion stops.*


***Where Things Can Go Wrong:***
- *You don't have a BASE CASE or your BASE-CASE is WRONG*
- *Forgetting to RETURN or returning the WRONG thing!*
- *Remember to use a RETURN with the BASE-CASE and not a CONSOLE.LOG*
- *Stack overflow!*


***HELPER FUNCTION***
- *A pattern where we have a recursive function that's called within an      outer function that is not recursive.*


***PURE RECURSION TIPS***
- *For arrays, use methods like slice, the spread operator, and concat       that make copies of arrays so you do not mutate them.*
- *Remember that strings are immutable so you will need to use methods       like slice, substr, or substring to make copies of strings.*
- *To make copies of objects use Object.assign, or the spread operator.*