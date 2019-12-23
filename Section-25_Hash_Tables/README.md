***HASH TABLES***
    **Objectives:**
        - *Explain what a hash table is.*
        - *Define what a hashing algorithm is.*
        - *Discuss what makes a good hashing algorithm.*
        - *Understand how collisions occur in a hash table.*
        - *How to handle collisions using separate chaining or linear probing.*
    **What is a Hash Table?**
        - *Hash tables are used to store key-value pairs.*
        - *They are like arrays, but the keys are not ordered.*
        - *Unlike arrays, hash tables are fast for all of the following operations: Finding Values, Adding New Values, and Removing Values.*
    **Why Should I Care?**
        - *Nearly every programming language has some sort of hash table data structure.*
        - *Because of their speed, hash tables are very commonly used!*
    **Hash Tables In Different Programming Languages:**
        - *Python has Dictionaries*
        - *JavaScript has Objects and Maps*
        - *Java, Go, & Scala have Maps*
        - *Ruby has...Hashes*
        - *Objects have some restrictions, but are basically hash tables.*
    **The HASH Part:**
        - *To implement a hash table, we'll be using an array.*
        - *In order to look up values by key, we need a way to convert keys into valid array indicies.*
        - *A function that performs this task is called a hash function.*
    **What Makes a Good Hash?**
        - *(1.) Fast (Constant Time)*
        - *(2.) Doesn't cluster outputs at specific indicies, but distributes uniformly.*
        - *(3.) Deterministic (Same input results in the same output)*
    **Prime Numbers? What?**
        - *The prime number in the hash is helpful in spreading out the keys more uniformly.*
        - *It's also helpful if the array that you're putting values into has a prime length.*
        - *You don't need to know why. (Math is complicating..)*
    **Dealing With Collisions**
        - *Even with a large array and a great hash function, collisions are inevitable.*
        - *There are many strategies for dealing with collisions, but we'll focus on two:*
        - *(1.) Separate Chaining*
        - *(2.) Linear Probing*
    **Separate Chaining:**
        - *At each index in our array we store values using a more sophisticated data structure (An array or linked list).*
        - *This allows us to store multiple key-value pairs at the same index.*
    **Linear Probing:**
        - *When we find a collision, we search through the array to find the next empty slot.*
        - *Unlike with separate chaining, this allows us to store a single key-value at each index.*
    **RECAP:**
        - *Hash tables are collections of key-value pairs*
        - *Hash tables can find values quickly given a key*
        - *Hash tables can add new key-values quickly*
        - *Hash tables store data in a large array, and work by hashing the keys*
        - *A good hash should be fast, distribute keys uniformly, and be deterministic.*
        - *Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index.*
        - *When in doubt, use a hash table!*