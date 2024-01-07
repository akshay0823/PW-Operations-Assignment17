// In JavaScript, the comma operator allows you to evaluate multiple expressions in a single statement. It's used to separate multiple expressions where JavaScript expects only one expression. The comma operator evaluates each of its operands (from left to right) and returns the value of the rightmost operand.

let a = 1;
let b = 2;
let c = (a++, b++, a + b);

console.log(c); // Output: 4

// Explanation:

// a++: This increments the value of a by 1.
// b++: This increments the value of b by 1.
// a + b: This adds the updated values of a and b.
// The value of c will be the result of the expression a + b, where a is incremented by 1 (a++), b is incremented by 1 (b++), and then a + b is evaluated. Therefore, c will be 4 because a becomes 2 and b becomes 3.
