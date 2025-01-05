function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null inputs
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers'); // Explicit type checking
  }
  return a + b; // Numerical addition
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 5)); // Output: null
console.log(foo('hello', 5)); // Throws an error
console.log(foo(1, '5')); // Throws an error