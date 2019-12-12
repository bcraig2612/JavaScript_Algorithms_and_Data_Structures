// this pattern uses objects or sets of collect values/frequencies of values
// this can often avoid the need for nested loops or O(n*n) operations with arrays / strings

// **EXAMPLE**

// >> Write a function called same, which accepts two arrays. The function should
//    return true if every value in the array has it's corresponding value squared
//    in the second array. The frequency of values must be the same. <<

// For Instance:
same([1, 2, 3], [4, 1, 9]); //true
same([1, 2, 3], [1, 9]); //false
same([1, 2, 1], [4, 4, 1]); //false ( must be the same frequency )
