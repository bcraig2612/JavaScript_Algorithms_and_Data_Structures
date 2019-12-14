function compareByLen(str1, str2) {
    return str1.length - str2.length;
}
['hello', 'MY', 'nAmE', 'is', 'Brandon', 'Craig', 'NICE', 'tO', 'MeEt', 'you'].sort(compareByLen);
//  returns 
//  [ 'MY',
//   'is',
//   'tO',
//   'you',
//   'nAmE',
//   'NICE',
//   'MeEt',
//   'hello',
//   'Craig',
//   'Brandon' ]



function compareByLen(str1, str2) {
    return str2.length - str1.length;
}
['hello', 'MY', 'nAmE', 'is', 'Brandon', 'Craig', 'NICE', 'tO', 'MeEt', 'you'].sort(compareByLen);
// returns 
// [ 'Brandon',
//   'hello',
//   'Craig',
//   'nAmE',
//   'NICE',
//   'MeEt',
//   'you',
//   'MY',
//   'is',
//   'tO' ]