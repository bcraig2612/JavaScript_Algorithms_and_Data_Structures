//Frequency Counter - validAnagram

function validAnagram(str1, str2){
    if(str1.length !== str2.length) {
        return false;
    }
    let one = str1.split('').sort().join('');
    let two = str2.split('').sort().join('');
    if(one === two) {
        return true;
    } else {
        return false;
    }
}

// ***FREQUENCY COUNTER SOLUTION***

function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagrams', 'nagaramm')