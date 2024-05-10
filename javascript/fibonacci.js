function fibonacci(num) {
  // type your code here
  if (num === 0 || num === 1) {
    return num;
  }
  let secondPrevious = 0, firstPrevious = 1;
  for (let n = 2; n <= num; n++) {
    const temp = firstPrevious;
    firstPrevious = secondPrevious + firstPrevious;
    secondPrevious = temp;
  }
  return firstPrevious;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("Expecting: 4181");
  console.log("=>", fibonacci(19));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
// 1. Nth Element in fibonacci sequence
// 2. Understood
// 3. Added another test.
// 4.
/**
 * function fibonacci(n) {
 *  if (n === 0 || n === 1) return n;
 *  sequence = [0, 1]
 *  for (let next = 2; next <= n; next++) {
 *    sequence.add(sequence[next-1] + sequence[next-2]);
 *  }
 *  return sequence[sequence.length - 1];
 * }
 */
// 5. Code above.
