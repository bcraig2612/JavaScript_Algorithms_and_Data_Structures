// function factorial(num) {
    // let total = 1;
    // total is only equal to 1 the 1st time through because of the loop
//     for (let i = num; i > 1; i--) {
//       total *= i; // *= is x = x * y
//     }
//     return total;
//   }
  
//   factorial();



function factorial(num) {
    if(num === 1) return 1;
    return num * factorial(num-1);
}

factorial(5);
        // returns 5 * factorial(4);
                // returns 4 * factorial(3);
                        // returns 3 * factorial(2);
                                // returns 2 * factorial(1);
                                        // returns 1;