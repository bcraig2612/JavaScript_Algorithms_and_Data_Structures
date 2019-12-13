// 4! is equal to 4 * 3 * 2 * 1

function factorial(num) {
  let total = 1;
  // total is only equal to 1 the 1st time through because of the loop
  for (let i = num; i > 1; i--) {
    total *= i; // *= is x = x * y
  }
  return total;
}

factorial();
