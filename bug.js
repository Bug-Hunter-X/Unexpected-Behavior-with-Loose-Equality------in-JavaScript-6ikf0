function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; // Simple addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(2, null)); // Output: 0
console.log(foo(2, 3));   // Output: 5