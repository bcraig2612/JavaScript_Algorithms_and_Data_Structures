***UNDERSTANDING THE PROBLEM***
> Can I restate the problem in my own words?
> What are the inputs that go into the problem? 
> What are the outputs that should come from the solution to the problem?
> Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? 
    > You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.
> How should I label the important pieces of data that are a part of the problem? 


**EXAMPLE:**
===========================================================================================
    Write a function which takes two numbers and returns their sum.
===========================================================================================
> (1) Can I restate the problem in my own words?
    -"Implement Addition"
> (2) What are the inputs that go into the problem? 
    - integers?
    - floats?
    - what about string for large numbers? 
> (3) What are the outputs that should come from the solution to the problem?
    - int?
    - float?
    - string? 
> (4) Can the outputs be determined from the inputs? In other words, do I have enough                information to solve the problem?
    
> (5) How should I label the important pieces of data that are a part of the problem?



***EXPLORE CONCRETE EXAMPLES***
> Coming up with examples can help you understand the problem better.
> Examples also provide sanity checks that your eventual solution works how it should.
> Unit Tests!
        > (1) Start with Simple Examples
        > (2) Progress to More Complex Examples
        > (3) Explore Examples with Empty Inputs
        > (4) Explore Examples with Invalid Inputs


**EXAMPLE:**
===========================================================================================
    Write a function which takes takes in a string and returns counts of each character in the string.
===========================================================================================
> (1) Start with Simple Examples
    > charCount("aaaa"); --> {a:4}  
    > charCount("hello"); --> {h:1, e:1, l:2, o:2}  
> (2) Progress to More Complex Examples    
    > "my phone number is 182763"
    > "Hello Hi
> (3) Explore Examples with Empty Strings
    >charCount("")   
> (4) Explore Examples with Invalid Inputs



***BREAK IT DOWN***
> Explicitly write out the steps you need to take.
    > Forces you to think about the code you'll write before you write it.
    > Helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (language syntax) as well.


**EXAMPLE:**
===========================================================================================
    Write a function which takes takes in a string and returns counts of each character in the string.
===========================================================================================
> function charCount(str) {
   // make object to return at the end
   // loop over string for each character...
        // if the character is a number/letter AND is a key in object, add one to the count
        // if the character is a number/letter AND is NOT in object, add it to the object      and set the value to 1
        // if the character is something else (space, period, etc.) don't do anything
    // return the object at the end
  }


***SOLVE OR SIMPLIFY***
> Solve the problem, if you can't, solve a similar simpler problem!
> SIMPLIFY:
    > Find the core difficulty in what you're trying to do.
    > Temporarily ignore that difficulty.
    > Write a simplified solution.
    > Then incorporate that difficulty back in.


**EXAMPLE:**
===========================================================================================
    Write a function which takes takes in a string and returns counts of each character in the string.
===========================================================================================
> function charCount(str) {
   // make object to return at the end
> var result = {};
   // loop over string for each character...
> for (var i = 0; i < str.length; i ++) {
>   var char = str[i].toLowerCase()
        // if the character is a number/letter AND is a key in object, add one to the count
>   if(result[char] > 0) {
>       result[char]++;
>   }
        // if the character is a number/letter AND is NOT in object, add it to the object      and set the value to 1
>   else {
>       result[char] = 1;
>   };
>  }
        // if the character is something else (space, period, etc.) don't do anything
    // return the object at the end
>   return result;   
> }

> FINISHED PRODUCT:
function charCount(str) {
  var obj = {};
  for( var i = 0; i < str.length; i++ ) {
    var char = str[i].toLowerCase();
    if(/[a-z0-9]/.test(char)) {
        if(obj[char] > 0) {
            obj[char]++;
        } else {
            obj[char] = 1;
        };
    }
  }
  return obj;
}
charCount("would you just look at it");



***LOOK BACK AND REFACTOR***
> REFACTORING QUESTIONS:
    (1) Can you check the result?
    (2) Can you derive the result differently?
    (3) Can you understand it at a glance?
    (4) Can you use the result or method for some other problem?
    (5) Can you improve the performance of your solution?
    (6) Can you think of other ways to refactor?
    (7) How have other people solved this problem? 

> Look at the "Best Solution After Solving-Researching-and-Refactoring" image



***RECAP!***
> Understand the Problem
> Explore Concrete Examples
> Break It Down 
> Solve/Simplify
> Look Back and Refactor