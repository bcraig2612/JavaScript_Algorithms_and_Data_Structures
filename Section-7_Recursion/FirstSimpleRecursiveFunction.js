// Recursive Version
function countDown(num) {
    // is num <= 0? 
    // If so, console.log("All done!")
    // If not, skip past the code block to console.log(num)
  if (num <= 0) {
    console.log('All done!');
    return;
    // return is the BASE CASE. It stops the code from running
  }
  console.log(num);
  num--;
  //Decreases num by 1
  countDown(num);
  //Calls countDown again and again until the num is <= 0
}
countDown(3);




// Iterative Version
function countDown(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log('All done!');
}
