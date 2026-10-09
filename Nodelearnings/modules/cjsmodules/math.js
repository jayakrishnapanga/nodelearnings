// file: math.js
// Simulate a delay using a blocking operation
const delay = (ms) => {
    const start = Date.now();
    while (Date.now() - start < ms) {} // Blocking delay
  };
  
  // Function to add two numbers
  const add = (a, b) => {
    delay(2000); // Simulate a 2-second blocking delay
    return a + b;
  };
  
  // Function to subtract two numbers
  const subtract = (a, b) => {
    delay(2000); // Simulate a 2-second blocking delay
    return a - b;
  };
  
  module.exports = { add, subtract };