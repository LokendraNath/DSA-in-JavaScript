//! Recursion (Direct Recursion)

//* Normal Recursion
let value = 0;

const recursion = (x) => {
  console.log(x);
  if (x < 10) {
    recursion(x + 1);
  }
};
// recursion(value); // --> 1 - 10 tak print

//* Factorial Recursion => 5! -> 5*4*3*2*1 = 120
const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(5));
