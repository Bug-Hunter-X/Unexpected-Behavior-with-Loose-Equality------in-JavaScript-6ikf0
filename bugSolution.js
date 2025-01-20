function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; // Simple addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(2, null)); // Output: 0
console.log(foo(2, 3));   // Output: 5
//Always use strict equality (===) to compare values in JavaScript to avoid type coercion issues
function fooStrict(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values explicitly
  } else if (typeof a !== 'number' || typeof b !== 'number'){
    return NaN; // Handle non-number cases
  }
  return a + b; // Simple addition
}
console.log(fooStrict(null,5)); //Output: 0
console.log(fooStrict(2,null)); //Output: 0
console.log(fooStrict(2,3)); //Output: 5
console.log(fooStrict('a',3)); //Output: NaN